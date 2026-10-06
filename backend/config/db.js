import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ContactMessage from '../models/ContactMessage.js';
import Project from '../models/Project.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '..', 'data');
const initialDataPath = path.join(dataDir, 'initialData.json');
const localStorePath = path.join(dataDir, 'localStore.json');

let isMongoConnected = false;

// Ensure local store file exists
export const initLocalStore = () => {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  if (!fs.existsSync(localStorePath)) {
    if (fs.existsSync(initialDataPath)) {
      const initial = JSON.parse(fs.readFileSync(initialDataPath, 'utf8'));
      const storeData = {
        ...initial,
        contacts: []
      };
      fs.writeFileSync(localStorePath, JSON.stringify(storeData, null, 2), 'utf8');
      console.log('✅ Initialized local storage from initialData.json');
    } else {
      fs.writeFileSync(localStorePath, JSON.stringify({ contacts: [], projects: [] }, null, 2), 'utf8');
    }
  }
};

export const getLocalStore = () => {
  initLocalStore();
  try {
    const raw = fs.readFileSync(localStorePath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading localStore.json:', err);
    return { contacts: [], projects: [] };
  }
};

export const updateLocalStore = (updaterFn) => {
  const store = getLocalStore();
  const updated = updaterFn(store);
  fs.writeFileSync(localStorePath, JSON.stringify(updated, null, 2), 'utf8');
  return updated;
};

// Seed MongoDB if empty
const seedMongoIfNeeded = async () => {
  try {
    const projectCount = await Project.countDocuments();
    if (projectCount === 0) {
      const initial = JSON.parse(fs.readFileSync(initialDataPath, 'utf8'));
      if (initial.projects && initial.projects.length > 0) {
        await Project.insertMany(initial.projects);
        console.log(`✅ Seeded ${initial.projects.length} initial projects into MongoDB`);
      }
    }
  } catch (err) {
    console.warn('⚠️ MongoDB seeding warning:', err.message);
  }
};

// Connect Database
export const connectDB = async () => {
  initLocalStore();
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/pushpa_portfolio';

  try {
    console.log(`📡 Connecting to MongoDB at ${uri}...`);
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 2000 // fast fail for local fallback if mongod not running
    });
    isMongoConnected = true;
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    await seedMongoIfNeeded();
  } catch (error) {
    isMongoConnected = false;
    console.log('------------------------------------------------------------');
    console.log(`ℹ️ [LOCAL DEV MODE] MongoDB service not currently reachable (${error.message}).`);
    console.log(`📁 Backend is running safely with persistent storage: backend/data/localStore.json`);
    console.log(`✨ All REST API endpoints, form submissions, and data queries work seamlessly.`);
    console.log(`💡 To switch to MongoDB later, start MongoDB or update MONGODB_URI in backend/.env.`);
    console.log('------------------------------------------------------------');
  }
};

export const isDbConnected = () => isMongoConnected;

// Unified Data Access Methods
export const dbService = {
  // Save Contact
  async saveContact(contactData) {
    if (isMongoConnected) {
      const message = new ContactMessage(contactData);
      return await message.save();
    } else {
      const newContact = {
        _id: 'msg_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7),
        ...contactData,
        status: 'unread',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };
      updateLocalStore((store) => {
        store.contacts = store.contacts || [];
        store.contacts.unshift(newContact);
        return store;
      });
      return newContact;
    }
  },

  // Get Contacts
  async getContacts() {
    if (isMongoConnected) {
      return await ContactMessage.find().sort({ createdAt: -1 });
    } else {
      const store = getLocalStore();
      return store.contacts || [];
    }
  },

  // Get Projects (with optional category & search filter)
  async getProjects({ category, search }) {
    let projectsList = [];
    if (isMongoConnected) {
      projectsList = await Project.find();
    } else {
      const store = getLocalStore();
      projectsList = store.projects || [];
    }

    if (category && category !== 'All') {
      projectsList = projectsList.filter(p => 
        (p.category && p.category.toLowerCase() === category.toLowerCase()) ||
        (p.badge && p.badge.toLowerCase() === category.toLowerCase())
      );
    }

    if (search && search.trim() !== '') {
      const term = search.toLowerCase().trim();
      projectsList = projectsList.filter(p => 
        p.title.toLowerCase().includes(term) ||
        p.subtitle.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        (p.tags && p.tags.some(tag => tag.toLowerCase().includes(term)))
      );
    }

    return projectsList;
  },

  // Get Project By ID
  async getProjectById(id) {
    if (isMongoConnected) {
      return await Project.findOne({ id }) || await Project.findById(id).catch(() => null);
    } else {
      const store = getLocalStore();
      return (store.projects || []).find(p => p.id === id || p._id === id) || null;
    }
  },

  // Get Profile
  async getProfile() {
    const store = getLocalStore();
    return {
      profile: store.profile || {},
      aboutHighlights: store.aboutHighlights || [],
      education: store.education || [],
      experience: store.experience || [],
      achievements: store.achievements || []
    };
  },

  // Get Skills
  async getSkills() {
    const store = getLocalStore();
    return store.skills || [];
  }
};
