import React from 'react';
import { motion } from 'framer-motion';
import { BRAND, tools } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  return (
    <section id="aboutme" className={`py-12 px-4 md:px-6 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className={`text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>ABOUT ME</h2>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>What I Do? | Fun Facts</p>
          
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className={`px-4 py-1.5 rounded-full ${isDark ? 'bg-[#2a2a2a] text-gray-300' : 'bg-[#f5f0e8] text-gray-600'}`}>🚀 Graphic Designer</span>
            <span className={`px-4 py-1.5 rounded-full ${isDark ? 'bg-[#2a2a2a] text-gray-300' : 'bg-[#f5f0e8] text-gray-600'}`}>🎨 UI/UX Designer</span>
            <span className={`px-4 py-1.5 rounded-full ${isDark ? 'bg-[#2a2a2a] text-gray-300' : 'bg-[#f5f0e8] text-gray-600'}`}>📸 Branding Expert</span>
          </div>
          
          <p className={`mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {BRAND.bio}
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {tools.map((tool, index) => (
              <span 
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-medium ${isDark ? 'bg-[#2a2a2a] text-gray-300' : 'bg-gray-100 text-gray-600'}`}
              >
                {tool.icon} {tool.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;