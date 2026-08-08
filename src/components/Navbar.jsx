import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = ['Home', 'About Me', 'Portfolio', 'Services', 'Testimonials', 'Contact'];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isDark 
        ? scrolled ? 'bg-[#1a1a1a] shadow-lg' : 'bg-[#0f0f0f]/95'
        : scrolled ? 'bg-white shadow-md' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 flex justify-between items-center">
        {/* Logo – bigger: h-16 on mobile, h-20 on larger */}
        <a href="#home" className="flex items-center">
          <img 
            src="/images/brand/joshdesignz newest.jpg" 
            alt="Josh Designz" 
            className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
          />
        </a>

        <ul className={`hidden md:flex space-x-6 text-sm font-medium ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {links.map((link) => (
            <li key={link}>
              <a 
                href={`#${link.toLowerCase().replace(' ', '')}`}
                className={`hover:${isDark ? 'text-[#7C3AED]' : 'text-[#7C3AED]'} transition`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-300 ${
              isDark ? 'bg-[#2a2a2a] text-yellow-400 hover:bg-[#3a3a3a]' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX className={isDark ? 'text-white' : 'text-black'} /> : <FiMenu className={isDark ? 'text-white' : 'text-black'} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${
          isDark ? 'bg-[#1a1a1a] border-gray-800' : 'bg-white border-gray-200'
        } border-t py-4 px-4`}>
          <ul className={`flex flex-col space-y-3 text-sm font-medium ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {links.map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase().replace(' ', '')}`}
                  onClick={() => setIsOpen(false)}
                  className={`block hover:${isDark ? 'text-[#7C3AED]' : 'text-[#7C3AED]'} transition`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;