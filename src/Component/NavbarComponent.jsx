import React, { useState } from 'react';

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Container bao ngoài để tạo khoảng trống với đỉnh trang
    <div className="fixed top-4 left-0 z-50 w-full px-4">
      <nav className="mx-auto max-w-6xl rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur-xl transition-all duration-300 hover:border-white/20">
        <div className="flex flex-wrap items-center justify-between p-3 px-6">
          
          {/* Logo Section */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <span className="self-center whitespace-nowrap text-lg font-bold text-white tracking-tight">
              DevPortfolio
            </span>
          </a>

          {/* Menu Items (Desktop) */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 font-medium">
             {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
  <li key={item}>
    <a 
      href={`#${item.toLowerCase()}`} 
      onClick={() => setIsOpen(false)} // Thêm dòng này để click xong là đóng menu mobile
      className="text-sm text-gray-400 hover:text-white transition-colors duration-200 relative group"
    >
      {item}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  </li>
))}
            </ul>
          </div>

          {/* Nút bấm Mobile */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white md:hidden"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 md:hidden`}>
          <ul className="flex flex-col items-center space-y-4 pb-6 font-medium border-t border-white/5 pt-4">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComponent;