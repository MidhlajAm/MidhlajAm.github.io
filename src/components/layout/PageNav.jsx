import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const sectionLinks = [
  { to: '/', label: 'HOME', icon: '/icons/home.svg', end: true },
  { to: '/#about', label: 'ABOUT', icon: '/icons/about.svg' },
  { to: '/projects', label: 'PROJECTS', icon: '/icons/projects.svg' },
  { to: '/#skills', label: 'SKILLS', icon: '/icons/skills.svg' },
  { to: '/#contact', label: 'CONTACT', icon: '/icons/contact.svg' },
];

const pageLinks = [
  { to: '/blog', label: 'BLOG', icon: '/icons/blog.svg' },
  { to: '/experience', label: 'EXP', icon: '/icons/experience.svg' },
  { to: '/achievements', label: 'AWARDS', icon: '/icons/awards.svg' },
];

const NavItem = ({ to, label, icon, end }) => (
  <li>
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `
        flex flex-col items-center gap-1 group
        ${isActive ? 'text-white' : 'text-gray-500'}
        hover:text-white transition-all duration-300
      `}
    >
      {({ isActive }) => (
        <>
          <div className={`
            w-8 h-8 sm:w-10 sm:h-10 border-2 flex items-center justify-center p-1
            transition-all duration-300
            ${isActive ? 'border-white bg-white scale-110' : 'border-gray-500 group-hover:border-white group-hover:scale-110'}
          `}>
            <img
              src={icon}
              alt={label}
              className={`w-full h-full transition-all duration-300 ${isActive ? 'invert' : 'group-hover:brightness-200'}`}
            />
          </div>
          <span className="font-vt323 text-xs sm:text-sm md:text-lg">{label}</span>
        </>
      )}
    </NavLink>
  </li>
);

const PageNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-30 bg-black border-b-4 border-white p-2 sm:p-4 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="max-w-6xl mx-auto">
        <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {sectionLinks.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
          {pageLinks.map((link) => (
            <NavItem key={link.to} {...link} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default PageNav;
