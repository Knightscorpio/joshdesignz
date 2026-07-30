import React from 'react';
import { BRAND } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  return (
    <footer className={`py-8 px-4 md:px-6 border-t ${
      isDark ? 'bg-[#0f0f0f] border-gray-800' : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto text-center">
        <div className="text-xl md:text-2xl font-black">
          <span className={isDark ? 'text-white' : 'text-[#1a1a1a]'}>JOSH</span>
          <span className="text-[#7C3AED]">DESIGNZ</span>
        </div>
        <p className={`text-xs md:text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {BRAND.tagline}
        </p>
        
        <div className={`flex flex-wrap justify-center gap-4 md:gap-6 mt-4 text-xs ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <a href="#home" className="hover:text-[#7C3AED] transition">Home</a>
          <a href="#aboutme" className="hover:text-[#7C3AED] transition">About</a>
          <a href="#portfolio" className="hover:text-[#7C3AED] transition">Portfolio</a>
          <a href="#services" className="hover:text-[#7C3AED] transition">Services</a>
          <a href="#contact" className="hover:text-[#7C3AED] transition">Contact</a>
        </div>
        
        <div className={`border-t mt-5 pt-4 text-[10px] md:text-xs ${
          isDark ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-400'
        }`}>
          <p>© {currentYear} {BRAND.name}. All Rights Reserved.</p>
          <p className="mt-1">
            Powered by <span className="text-[#7C3AED] font-medium">BrandingWithMO</span> (+234 810 000 7877)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;