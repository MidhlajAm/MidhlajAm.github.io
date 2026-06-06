import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/projects', label: 'PROJECTS' },
  { to: '/blog', label: 'BLOG' },
  { to: '/experience', label: 'EXPERIENCE' },
  { to: '/achievements', label: 'ACHIEVEMENTS' },
];

const PageNav = () => (
  <header className="sticky top-0 z-30 bg-black border-b-4 border-white">
    <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Link to="/" className="font-press-start text-sm sm:text-base hover:bg-white hover:text-black px-2 py-1">
        MIDHLAJ AM
      </Link>
      <nav className="flex flex-wrap gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) => `font-vt323 text-lg border-2 px-3 py-1 hover:bg-white hover:text-black ${isActive ? 'border-white text-white' : 'border-gray-500 text-gray-500'}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default PageNav;
