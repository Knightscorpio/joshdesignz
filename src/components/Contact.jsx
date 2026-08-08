import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { BRAND } from '../utils/constants';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  return (
    <section id="contact" className={`py-12 px-4 md:px-6 ${isDark ? 'bg-[#1a1a1a]' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className={`text-2xl md:text-3xl font-black ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>LET'S CONNECT</h2>
          <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Have a project? Let's talk!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            <div className={`flex items-center gap-3 p-3 rounded-lg border ${
              isDark ? 'bg-[#2a2a2a] border-gray-800' : 'bg-[#f5f0e8] border-gray-200'
            }`}>
              <FiMail className="text-[#7C3AED]" />
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                <a href={`mailto:${BRAND.email}`} className={`text-sm font-medium hover:underline ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  {BRAND.email}
                </a>
              </div>
            </div>
            <div className={`flex items-center gap-3 p-3 rounded-lg border ${
              isDark ? 'bg-[#2a2a2a] border-gray-800' : 'bg-[#f5f0e8] border-gray-200'
            }`}>
              <FiPhone className="text-[#7C3AED]" />
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Phone</p>
                <a href={`tel:${BRAND.phone}`} className={`text-sm font-medium hover:underline ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>
                  {BRAND.phone}
                </a>
              </div>
            </div>
            <div className={`flex items-center gap-3 p-3 rounded-lg border ${
              isDark ? 'bg-[#2a2a2a] border-gray-800' : 'bg-[#f5f0e8] border-gray-200'
            }`}>
              <FiMapPin className="text-[#7C3AED]" />
              <div>
                <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-[#1a1a1a]'}`}>{BRAND.location}</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
  <a href="https://wa.me/2349164434346" target="_blank" rel="noopener" className="text-sm font-medium text-[#7C3AED] hover:underline">WhatsApp</a>
  <a href={BRAND.social.linkedin} target="_blank" rel="noopener" className="text-sm font-medium text-[#7C3AED] hover:underline">LinkedIn</a>
  <a href="https://x.com/joshdesignz001?s=11" target="_blank" rel="noopener" className="text-sm font-medium text-[#7C3AED] hover:underline">X</a>
</div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-[#7C3AED] outline-none ${
                isDark 
                  ? 'bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-200 text-[#1a1a1a] placeholder-gray-400'
              }`}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-[#7C3AED] outline-none ${
                isDark 
                  ? 'bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-200 text-[#1a1a1a] placeholder-gray-400'
              }`}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:ring-2 focus:ring-[#7C3AED] outline-none resize-none ${
                isDark 
                  ? 'bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-200 text-[#1a1a1a] placeholder-gray-400'
              }`}
            />
            <button
              type="submit"
              className="w-full bg-[#7C3AED] text-white py-2.5 rounded-lg text-sm font-medium hover:bg-[#6D28D9] transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;