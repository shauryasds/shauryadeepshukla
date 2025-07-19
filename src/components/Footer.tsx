import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Coffee, Code2, Github, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/shauryasds', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com/in/shaurya-deep-shukla', label: 'LinkedIn' },
    { icon: <Twitter size={20} />, url: 'https://twitter.com/shauryadeep589', label: 'Twitter' },
  ];

  return (
    <footer className="bg-black border-t border-gray-900 relative">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-2"
          >
            <div className="flex items-center mb-4">
              <Code2 className="text-emerald-400 mr-2" size={28} />
              <span className="text-2xl font-bold text-white">
                <span className="text-emerald-400">{'<'}</span>
                Shaurya
                <span className="text-emerald-400">{' />'}</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Full-stack developer passionate about creating digital solutions that make a difference.
              Currently turning coffee into code and ideas into reality.
            </p>
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center">
                <Coffee size={16} className="mr-1 text-emerald-400" />
                <span className="text-sm">Powered by caffeine</span>
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
              <div className="flex items-center">
                <Heart size={16} className="mr-1 text-red-400" />
                <span className="text-sm">Made with passion</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                >
                  {social.icon}
                  <span className="ml-2 text-sm">{social.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <a
                href="mailto:shauryadeep589@gmail.com"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200 text-sm font-medium"
              >
                shauryadeep589@gmail.com
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Shaurya Deep Shukla. All rights reserved.
            <span className="text-emerald-400 ml-2">Built with React & Tailwind CSS</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-500 text-xs">
              Last updated: Just now🙃
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-emerald-400 rounded-lg transition-all duration-200 hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-500 text-xs">
            <span className="text-emerald-400">Easter egg:</span> You've made it to the bottom! 🎉
            You deserve a cookie 🍪 (or maybe some coffee ☕)
          </p>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500"></div>
    </footer>
  );
};

export default Footer;