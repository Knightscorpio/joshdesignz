import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { BRAND } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

const Hero = () => {
  const { isDark } = useTheme();

  return (
    <section id="home" className={`min-h-screen flex items-center pt-20 pb-10 px-4 md:px-6 ${
      isDark ? 'bg-[#0f0f0f]' : 'bg-[#f5f0e8]'
    }`}>
      <div className="max-w-5xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src="/images/brand/josh advert.jpg"
            alt="Josh Designz Advert"
            className="max-w-xs md:max-w-md mx-auto mb-4 rounded-lg shadow-lg object-contain border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          />

          <p className={`text-sm font-medium tracking-widest uppercase mb-2 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>HI THERE!</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
            <span className={isDark ? 'text-white' : 'text-[#1a1a1a]'}>I'M </span>
            <span className="text-[#7C3AED]">JOSH</span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {BRAND.tagline}  building modern, high‑converting digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap justify-center gap-3"
          >
            <a 
              href="#portfolio" 
              className="bg-[#7C3AED] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#6D28D9] transition flex items-center gap-2"
            >
              View Portfolio <FiArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-[#7C3AED] text-[#7C3AED] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-[#7C3AED] hover:text-white transition"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`mt-8 flex flex-wrap justify-center gap-4 text-xs ${
              isDark ? 'text-gray-500' : 'text-gray-400'
            }`}
          >
            <span>✨ 90+ Projects</span>
            <span>🎨 6+ Services</span>
            <span>🌍 10+ Client Brands</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;