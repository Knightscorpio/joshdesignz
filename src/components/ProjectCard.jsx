import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ProjectCard = ({ project, index }) => {
  const { isDark } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className={`group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ${
        isDark ? 'bg-[#1e1e1e] border border-gray-800' : 'bg-white border border-gray-200'
      }`}
    >
      <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 flex items-center justify-center">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="p-3">
        <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">
          {project.category}
        </span>
        <h3 className={`text-sm font-bold mt-0.5 leading-tight ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
          {project.title}
        </h3>
        <p className={`text-xs mt-0.5 line-clamp-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {project.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;