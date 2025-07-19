import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300  ${'bg-black/95 backdrop-blur-md shadow-2xl border-b border-gray-800'

        }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-4 z-50">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-white tracking-tight"
          >
            <span className="text-emerald-400">{'<'}</span>
            Shaurya
            <span className="text-emerald-400">{' />'}</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-emerald-400 transition-colors duration-200 font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/shauryasds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/shaurya-deep-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/shauryadeep589"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-3 pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-300 hover:text-emerald-400 text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com/shauryasds"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/shaurya-deep-shukla"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com/shauryadeep589"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
