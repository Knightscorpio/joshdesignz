import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';
import { useTheme } from '../context/ThemeContext';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const { isDark } = useTheme();
  const categories = ['All', 'Print Design', 'Logo Design', 'Mockup', 'UI/UX'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className={`py-12 px-4 md:px-6 ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#f5f0e8]'}`}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className={`text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>PORTFOLIO</h2>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Selected Projects</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#7C3AED] text-white'
                  : isDark
                    ? 'bg-[#2a2a2a] text-gray-300 hover:bg-[#3a3a3a]'
                    : 'bg-white text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="relative">
              <span className="absolute top-2 left-2 text-xs font-black text-white bg-[#7C3AED]/80 px-2 py-0.5 rounded z-10">
                {String(index + 1).padStart(2, '0')}
              </span>
              <ProjectCard project={project} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;