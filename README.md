# Pushpa Rani — Corporate Tech Student Portfolio (Full-Stack Application)

A modern full-stack web application converted from Google Stitch AI design files. Built with **React 18 + Vite** on the frontend, a **Node.js + Express** REST API backend, and **MongoDB (Mongoose)** with an automated resilient local persistence fallback.

---

## 🏛️ Architecture & Project Structure

The project has been cleanly separated into `frontend/` and `backend/` while strictly preserving all original Google Stitch AI source files (`executive_intelligence/`, `pushpa_rani_portfolio_authentic_complete/`, etc.) intact for reference.

```
stitch_corporate_tech_student_portfolio/
├── backend/                               # Node.js + Express REST API Server
│   ├── config/
│   │   └── db.js                          # MongoDB Mongoose connector + resilient local store fallback
│   ├── controllers/
│   │   ├── contactController.js           # Handles contact validation, storage, and retrieval
│   │   ├── projectController.js           # Handles project querying, filtering & details
│   │   └── profileController.js           # Serves profile stats, skills, education, experience
│   ├── data/
│   │   ├── initialData.json               # Authentic verified portfolio seed data
│   │   └── localStore.json                # Resilient server-side persistent store
│   ├── middleware/
│   │   ├── errorHandler.js                # Centralized error handling
│   │   └── validator.js                   # Request validation middleware
│   ├── models/
│   │   ├── ContactMessage.js              # Mongoose schema for contact messages
│   │   └── Project.js                     # Mongoose schema for projects
│   ├── routes/
│   │   ├── contactRoutes.js               # POST /api/contact (with rate limiter)
│   │   ├── projectRoutes.js               # GET /api/projects, GET /api/projects/:id
│   │   └── profileRoutes.js               # GET /api/profile, GET /api/profile/skills, /api/health
│   ├── .env                               # Local backend environment variables
│   ├── .env.example                       # Example environment template
│   ├── package.json                       # Backend dependencies & scripts
│   └── server.js                          # Express app entry point
│
├── frontend/                              # React 18 + Vite Frontend Application
│   ├── public/
│   │   ├── favicon.svg                    # SVG brand favicon
│   │   └── images/
│   │       └── pushpa_rani.png            # Portrait image asset
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx             # Sticky glassmorphism nav with active scroll tracker
│   │   │   │   └── Footer.jsx             # Brand footer, quote & social channels
│   │   │   ├── sections/
│   │   │   │   ├── Hero.jsx               # Hero section, stat counters & floating badges
│   │   │   │   ├── About.jsx              # About narrative & 3 highlight pillar cards
│   │   │   │   ├── Skills.jsx             # Categorized skills with real-time search & filters
│   │   │   │   ├── Experience.jsx         # TalentGro Global intern experience & competencies
│   │   │   │   ├── Projects.jsx           # 4 authentic project cards with interactive visual previews
│   │   │   │   ├── Education.jsx          # BBA & school credentials
│   │   │   │   ├── Achievements.jsx       # 4 verified achievement cards
│   │   │   │   └── Contact.jsx            # Interactive contact form + direct channels
│   │   │   └── ui/
│   │   │       ├── ProjectModal.jsx       # Case study deep-dive modal
│   │   │       ├── ResumeModal.jsx        # Curriculum vitae preview/print modal
│   │   │       └── Toast.jsx              # Feedback toast notification system
│   │   ├── services/
│   │   │   └── api.js                     # Axios HTTP client connecting to backend
│   │   ├── App.jsx                        # Root React component
│   │   ├── index.css                      # Tailwind base & custom design tokens
│   │   └── main.jsx                       # React DOM entry point
│   ├── .env                               # Frontend environment variables
│   ├── .env.example                       # Example environment template
│   ├── index.html                         # HTML entry with Google Fonts & Material Symbols
│   ├── package.json                       # Frontend dependencies & scripts
│   ├── postcss.config.js                  # PostCSS plugins
│   ├── tailwind.config.js                 # Exact design tokens matching executive_intelligence/DESIGN.md
│   └── vite.config.js                     # Vite build & proxy configuration
│
├── executive_intelligence/                # Original Stitch AI master design specification
├── pushpa_rani_portfolio_authentic_complete/ # Original Stitch AI authentic HTML/CSS milestone
├── pushpa_rani_portfolio_premium_functional/ # Original Stitch AI premium layout milestone
├── package.json                           # Root orchestration scripts
└── README.md                              # Complete documentation
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js**: v18.0.0 or later (v24.19.0 LTS recommended).
- **npm**: v9.0.0 or later.
- *(Optional)* **MongoDB**: Local MongoDB community service or MongoDB Atlas cluster. (If MongoDB is not installed, the application automatically runs in safe persistent file-store mode).

---

### 2. Installation Commands

You can install all dependencies from the root directory or inside each folder:

#### Option A: Quick Install from Root
```bash
npm run install:all
```

#### Option B: Manual Install per Directory
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

---

### 3. Running Locally

Open two terminal windows (one for the backend and one for the frontend):

#### Terminal 1 — Start Backend Server (Port 5000):
```bash
cd backend
npm run dev
# Or: npm start
```
> The API will be accessible at: `http://localhost:5000`

#### Terminal 2 — Start Frontend Application (Port 5173):
```bash
cd frontend
npm run dev
```
> Open your browser at: `http://localhost:5173`

---

## 🗄️ Database Configuration & Storage Strategy

### How Database Persistence Works
The application implements a **dual-adapter persistence architecture**:

1. **MongoDB Mode (Primary)**:
   - Configured via `MONGODB_URI` in `backend/.env`.
   - Uses Mongoose schemas (`ContactMessage.js`, `Project.js`).
   - Automatically seeds verified project data into MongoDB collections on first run if empty.

2. **Resilient Local File Persistence (Zero-Setup Fallback)**:
   - If MongoDB is not yet running locally or connection credentials are not provided, the backend catches the timeout safely and uses `backend/data/localStore.json`.
   - **All REST APIs, contact form submissions, and query filters remain 100% functional and persistent on the server side** without throwing unhandled exceptions.
   - You can connect MongoDB at any point without code changes.

### Connecting MongoDB (Local or Atlas)
To switch to MongoDB:
1. Open `backend/.env`.
2. Update the `MONGODB_URI` line:
   - **Local MongoDB**:
     ```env
     MONGODB_URI=mongodb://127.0.0.1:27017/pushpa_portfolio
     ```
   - **MongoDB Atlas Cloud**:
     ```env
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/pushpa_portfolio?retryWrites=true&w=majority
     ```
3. Restart the backend: `npm run dev`.

---

## 🌐 REST API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service uptime and database connection status |
| `GET` | `/api/profile` | Profile bio, stats, education, experience, achievements |
| `GET` | `/api/profile/skills` | Categorized skills (Business, Data Analytics, AI Tools) |
| `GET` | `/api/projects` | All portfolio projects (supports `?category=...&search=...`) |
| `GET` | `/api/projects/:id` | Detailed case study for a specific project |
| `POST`| `/api/contact` | Submits a contact inquiry (includes validation & rate limiting) |
| `GET` | `/api/contact` | Retrieves received messages (admin/testing view) |

### Sample `POST /api/contact` Payload:
```json
{
  "name": "Sarah Jenkins",
  "email": "sarah.jenkins@techcorp.com",
  "subject": "Recruitment Opportunity",
  "message": "We were very impressed by your BBA data analytics portfolio and would love to interview you."
}
```

### Sample Response (`201 Created`):
```json
{
  "success": true,
  "message": "Thank you for reaching out! Your message has been received, and Pushpa will respond shortly.",
  "data": {
    "id": "msg_1790665104253_vbp4w",
    "name": "Sarah Jenkins",
    "email": "sarah.jenkins@techcorp.com",
    "subject": "Recruitment Opportunity",
    "createdAt": "2026-09-29T06:58:24.255Z"
  }
}
```

---

## 🎨 Design Preservation (Stitch AI)

All visual tokens from `executive_intelligence/DESIGN.md` have been configured directly in `frontend/tailwind.config.js` and `frontend/src/index.css`:
- **Colors**: Surface `#f8f9ff`, Primary `#0037b0`, Primary Container `#1d4ed8`, On-Surface `#0b1c30`.
- **Typography**: `Plus Jakarta Sans` for headings, `Inter` for body copy, `JetBrains Mono` for badges.
- **Portraits & Badges**: Retains the layered photo container with floating ambient badges (*Power BI & Excel*, *Data Analytics*, *AI Tools*).
- **Mini-Visualizations**:
  - *SkyRouter AI*: Parameterized Itinerary & Budget engine card.
  - *Business Analytics Dashboard*: SVG financial trend curve with fill gradient.
  - *Financial Statement & Ratio Analysis*: Liquidity & Solvency / Profitability benchmark matrix.
  - *NovaTech Case Study*: Organizational Diagnosis & Managerial Strategy card.
