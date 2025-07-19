
import { motion } from 'framer-motion';
import { ArrowDown, Coffee, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/10 via-black to-black"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center mb-8"
          >
            <div className="px-4 py-2 border border-gray-800 rounded-full bg-gray-900/50">
              <Code2 className="text-emerald-400 mr-3 inline" size={20} />
              <span className="text-gray-300 text-sm font-medium tracking-wide">Full-Stack Developer & AI Enthusiast</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight"
          >
            Code, AI, and a
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300">
              {' '}Will to Build.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Final-year CS student who builds things that actually work.
            <br />
            <span className="text-emerald-400 font-medium">Currently turning coffee into MERN stack magic</span> ☕
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <a href="/#contact">
                <button className="bg-emerald-500 hover:bg-emerald-600 text-black px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25">
                  Let's Build Something
                </button>
              </a>

              <a href="/#projects">
                <button className="border border-gray-700 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:bg-gray-900 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300">
                  View My Work
                </button>
              </a>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-center space-x-8 text-gray-500 text-sm"
          >
            <div className="flex items-center">
              <Coffee size={16} className="mr-2 text-emerald-400" />
              <span>Powered by caffeine</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div>
              <span>📍 India</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div>
              <span>🎓 Krishna Institute of Technology</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDown className="text-emerald-400 animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;