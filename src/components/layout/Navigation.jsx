import React from 'react';

const Navigation = ({ activeSection, onNavigate }) => {
    const navItems = [
        { id: 'home', label: 'HOME', icon: '/icons/home.svg' },
        { id: 'about', label: 'ABOUT', icon: '/icons/about.svg' },
        { id: 'projects', label: 'PROJECTS', icon: '/icons/projects.svg' },
        { id: 'skills', label: 'SKILLS', icon: '/icons/skills.svg' },
        { id: 'contact', label: 'CONTACT', icon: '/icons/contact.svg' },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 border-t-4 border-white bg-black p-2 sm:p-4 z-30 md:top-0 md:bottom-auto md:border-t-0 md:border-b-4 md:left-0 md:w-full">
            <ul className="flex justify-around md:justify-center md:gap-8 lg:gap-12 max-w-4xl mx-auto">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => onNavigate(item.id)}
                            className={`
                flex flex-col items-center gap-1 group
                ${activeSection === item.id ? 'text-white' : 'text-gray-500'}
                hover:text-white transition-all duration-300
              `}
                        >
                            <div className={`
                w-8 h-8 sm:w-10 sm:h-10 border-2 flex items-center justify-center p-1
                transition-all duration-300
                ${activeSection === item.id ? 'border-white bg-white scale-110' : 'border-gray-500 group-hover:border-white group-hover:scale-110'}
              `}>
                                <img
                                    src={item.icon}
                                    alt={item.label}
                                    className={`w-full h-full transition-all duration-300 ${activeSection === item.id ? 'invert' : 'group-hover:brightness-200'}`}
                                />
                            </div>
                            <span className="font-vt323 text-xs sm:text-sm md:text-lg hidden sm:block">{item.label}</span>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navigation;
