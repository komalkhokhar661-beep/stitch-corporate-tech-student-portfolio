import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';
import ProjectModal from './components/ui/ProjectModal';
import ResumeModal from './components/ui/ResumeModal';
import Toast from './components/ui/Toast';
import { api } from './services/api';
import {
  initialProfile,
  initialAboutHighlights,
  initialSkills,
  initialExperience,
  initialProjects,
  initialEducation,
  initialAchievements
} from './data/portfolioData';

export default function App() {
  const [profile, setProfile] = useState(initialProfile);
  const [aboutHighlights, setAboutHighlights] = useState(initialAboutHighlights);
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);
  const [achievements, setAchievements] = useState(initialAchievements);
  const [skills, setSkills] = useState(initialSkills);
  const [projects, setProjects] = useState(initialProjects);

  const [loading, setLoading] = useState(true);
  const [backendConnected, setBackendConnected] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Load portfolio data from Node.js + Express backend
  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        const [profileRes, skillsRes, projectsRes, healthRes] = await Promise.allSettled([
          api.getProfile(),
          api.getSkills(),
          api.getProjects(),
          api.getHealth(),
        ]);

        if (!isMounted) return;

        if (healthRes.status === 'fulfilled') {
          setBackendConnected(true);
        }

        if (profileRes.status === 'fulfilled' && profileRes.value.success) {
          const data = profileRes.value.data;
          setProfile(data.profile);
          setAboutHighlights(data.aboutHighlights);
          setEducation(data.education);
          setExperience(data.experience);
          setAchievements(data.achievements);
        }

        if (skillsRes.status === 'fulfilled' && skillsRes.value.success) {
          setSkills(skillsRes.value.data);
        }

        if (projectsRes.status === 'fulfilled' && projectsRes.value.success) {
          setProjects(projectsRes.value.data);
        }
      } catch (err) {
        console.warn('API fetch warning:', err);
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col font-body selection:bg-primary/10 selection:text-primary">
      {/* Top Fixed Navigation */}
      <Navbar backendConnected={backendConnected} />

      {/* Main Content Sections */}
      <main className="w-full pt-20">
        <Hero 
          profile={profile} 
          onOpenResume={() => setIsResumeOpen(true)} 
        />
        
        <About 
          profile={profile} 
          aboutHighlights={aboutHighlights} 
        />
        
        <Skills 
          skills={skills} 
        />
        
        <Experience 
          experience={experience} 
        />
        
        <Projects 
          projects={projects} 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />
        
        <Education 
          education={education} 
        />
        
        <Achievements 
          achievements={achievements} 
        />
        
        <Contact 
          profile={profile} 
          onShowToast={(t) => setToast(t)} 
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Modals & Overlays */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={profile}
        education={education}
        experience={experience}
        skills={skills}
      />

      {/* Toast Feedback */}
      <Toast 
        toast={toast} 
        onClose={() => setToast(null)} 
      />
    </div>
  );
}
