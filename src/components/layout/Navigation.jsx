import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navigation = ({ activeSection, onNavigate }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const navItems = [
        { id: 'home', label: 'HOME', icon: '/icons/home.svg' },
        { id: 'about', label: 'ABOUT', icon: '/icons/about.svg' },
        { id: 'projects', label: 'PROJECTS', icon: '/icons/projects.svg' },
        { id: 'skills', label: 'SKILLS', icon: '/icons/skills.svg' },
        { id: 'contact', label: 'CONTACT', icon: '/icons/contact.svg' },
    ];

    const pageItems = [
        { path: '/blog', label: 'BLOG', icon: '/icons/blog.svg' },
        { path: '/experience', label: 'EXP', icon: '/icons/experience.svg' },
        { path: '/achievements', label: 'AWARDS', icon: '/icons/awards.svg' },
    ];

    const handleSectionClick = (sectionId) => {
        if (location.pathname !== '/') {
            navigate('/');
            window.setTimeout(() => onNavigate(sectionId), 50);
            return;
        }

        onNavigate(sectionId);
    };

    return (
        <nav className="fixed bottom-0 left-0 right-0 border-t-4 border-white bg-black p-2 sm:p-4 z-30 md:top-0 md:bottom-auto md:border-t-0 md:border-b-4 md:left-0 md:w-full">
            <ul className="flex justify-around md:justify-center md:gap-5 lg:gap-8 max-w-6xl mx-auto">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => handleSectionClick(item.id)}
                            className={`
                flex flex-col items-center gap-1 group
                ${location.pathname === '/' && activeSection === item.id ? 'text-white' : 'text-gray-500'}
                hover:text-white transition-all duration-300
              `}
                        >
                            <div className={`
                w-8 h-8 sm:w-10 sm:h-10 border-2 flex items-center justify-center p-1
                transition-all duration-300
                ${location.pathname === '/' && activeSection === item.id ? 'border-white bg-white scale-110' : 'border-gray-500 group-hover:border-white group-hover:scale-110'}
              `}>
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className={`w-full h-full transition-all duration-300 ${location.pathname === '/' && activeSection === item.id ? 'invert' : 'group-hover:brightness-200'}`}
                                />
                            </div>
                            <span className="font-vt323 text-xs sm:text-sm md:text-lg hidden sm:block">{item.label}</span>
                        </button>
                    </li>
                ))}
                {pageItems.map((item) => (
                    <li key={item.path} className="hidden md:flex items-center">
                        <Link
                            to={item.path}
                            className={`
                flex flex-col items-center gap-1 group
                ${location.pathname.startsWith(item.path) ? 'text-white' : 'text-gray-500'}
                hover:text-white transition-all duration-300
              `}
                        >
                            <div className={`
                w-8 h-8 sm:w-10 sm:h-10 border-2 flex items-center justify-center p-1
                transition-all duration-300
                ${location.pathname.startsWith(item.path) ? 'border-white bg-white scale-110' : 'border-gray-500 group-hover:border-white group-hover:scale-110'}
              `}>
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className={`w-full h-full transition-all duration-300 ${location.pathname.startsWith(item.path) ? 'invert' : 'group-hover:brightness-200'}`}
                                />
                            </div>
                            <span className="font-vt323 text-xs sm:text-sm md:text-lg hidden sm:block">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
