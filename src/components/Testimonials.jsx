import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { useTheme } from '../context/ThemeContext';

const Testimonials = () => {
  const { isDark } = useTheme();

  return (
    <section id="testimonials" className={`py-12 px-4 md:px-6 ${isDark ? 'bg-[#0f0f0f]' : 'bg-[#f5f0e8]'}`}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className={`text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>TESTIMONIALS</h2>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>What our brand partners say</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials && testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`rounded-lg p-5 shadow-lg border ${
                isDark ? 'bg-[#1e1e1e] border-gray-800' : 'bg-white border-gray-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7C3AED] flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.brand ? testimonial.brand.charAt(0) : '?'}
                </div>
                <div>
                  <p className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
                    {testimonial.brand || 'Unknown Brand'}
                  </p>
                  <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonial.project || 'Project'}
                  </p>
                </div>
              </div>
              <p className={`text-sm italic mt-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                "{testimonial.quote || 'No quote available'}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;