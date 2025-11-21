import React, { useState } from 'react';

import Navigation from './components/layout/Navigation';
import HomeSection from './components/screens/HomeSection';
import AboutSection from './components/screens/AboutSection';
import ProjectsSection from './components/screens/ProjectsSection';
import SkillsSection from './components/screens/SkillsSection';
import ContactSection from './components/screens/ContactSection';
import CursorGlow from './components/effects/CursorGlow';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section on scroll
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
    <div className="min-h-screen bg-black text-white font-courier selection:bg-white selection:text-black">
      <CursorGlow />
      <main className="pb-20 md:pb-0">
        <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

        <HomeSection onNavigate={handleNavigate} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
