import React, { useState } from 'react';
import { NavLink, useLocation } from "react-router-dom";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Hàm xử lý cuộn mượt cho các link ID nội bộ (#about, #projects...)
  const handleScroll = (e, id) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const navItems = [
    { name: 'About', path: '/' },
    { name: 'Service', path: '/service' },
    { name: 'Projects', path: '#projects' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <div className="fixed top-4 left-0 z-[100] w-full px-4">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-[#030014]/80 backdrop-blur-xl transition-all duration-300 hover:border-white/20 shadow-2xl">
        <div className="flex flex-wrap items-center justify-between p-3 px-6">

          {/* Logo Section */}
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <span className="text-xl font-black text-white tracking-tighter uppercase italic">
              Long<span className="text-indigo-500 not-italic">.Dev</span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex space-x-10 font-bold uppercase tracking-widest text-[11px]">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    to={item.path}
                    onClick={(e) => item.path.startsWith('#') && handleScroll(e, item.path)}
                    className={({ isActive }) => `
                      relative py-2 transition-all duration-300 group
                      ${isActive && item.path.startsWith('/') ? 'text-indigo-400' : 'text-gray-400 hover:text-white'}
                    `}
                  >
                    {item.name}
                    {/* Hậu duệ của "Glow" - Đường gạch chân khi active/hover */}
                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-indigo-500 transition-all duration-300 
                      ${(location.pathname === item.path) ? 'w-full shadow-[0_0_8px_#6366f1]' : 'w-0 group-hover:w-full'}
                    `}></span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Nút Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white md:hidden transition-colors"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <ul className="flex flex-col items-center space-y-6 pb-8 font-black uppercase tracking-[0.2em] border-t border-white/5 pt-6 bg-black/20">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink 
                  to={item.path} 
                  className="text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                  onClick={(e) => {
                    if (item.path.startsWith('#')) handleScroll(e, item.path);
                    else setIsOpen(false);
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;