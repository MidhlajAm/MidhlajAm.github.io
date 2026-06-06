import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Navigation from './components/layout/Navigation';
import HomeSection from './components/screens/HomeSection';
import AboutSection from './components/screens/AboutSection';
import ProjectsSection from './components/screens/ProjectsSection';
import SkillsSection from './components/screens/SkillsSection';
import ContactSection from './components/screens/ContactSection';
import CursorGlow from './components/effects/CursorGlow';
import ScrollToTop from './components/effects/ScrollToTop';
import SEO from './components/seo/SEO';
import AchievementsPage from './pages/AchievementsPage';
import BlogDetailPage from './pages/BlogDetailPage';
import BlogPage from './pages/BlogPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProjectsPage from './pages/ProjectsPage';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="Midhlaj AM | Mobile App Developer"
        description="Midhlaj AM is a Flutter and Firebase developer building polished cross-platform mobile apps, developer projects, and technical writing."
        path="/"
      />
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <HomeSection onNavigate={handleNavigate} />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-courier selection:bg-white selection:text-black">
      <CursorGlow />
      <ScrollToTop />
      <main className="pb-20 md:pb-0">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetailPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
