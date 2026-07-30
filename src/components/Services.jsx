import React from 'react';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { tools } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

const Services = () => {
  const { isDark } = useTheme();

  return (
    <section id="services" className={`py-12 px-4 md:px-6 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className={`text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>SERVICES</h2>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>What I offer</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`rounded-lg p-4 hover:shadow-lg transition border ${
                  isDark ? 'bg-[#2a2a2a] border-gray-800' : 'bg-[#f5f0e8] border-gray-200'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="text-[#7C3AED] text-xl">
                    {Icon && <Icon className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>{service.title}</h3>
                    <p className={`text-xs mt-0.5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>{service.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <h3 className={`text-sm font-bold mb-3 ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>TOOLS I USE</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {tools.map((tool, idx) => (
              <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${
                isDark ? 'bg-[#2a2a2a] text-gray-300' : 'bg-[#f5f0e8] text-gray-600'
              }`}>
                {tool.icon} {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;