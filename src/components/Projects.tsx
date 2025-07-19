import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'HireAI',
      description: 'An immersive AI-powered interview platform that revolutionizes the hiring process with intelligent assessment and real-time feedback.',
      tech: ['React.js', 'Node.js', 'OpenAI API', 'MongoDB', 'Gemoini API'],
      github: 'https://github.com/shauryasds/HireAi',
      live: 'http://hire-ai-azure.vercel.app',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true,
      award: 'Top 10% - Build with India Hackathon 2025'
    },
    {
      title: 'Patna Kart',
      description: 'A comprehensive local e-commerce solution designed specifically for Patna businesses, connecting local vendors with customers.',
      tech: ['Next.js', 'Express.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
      github: 'https://github.com/shauryasds/Flipkart-Clone---Full-Stack-E-Commerce-Platform-MERN-Stack-Redux-Stripe-Integration',
      live: 'http://flipkart-clone-rose.vercel.app',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      featured: true
    },

    {
      title: 'Smart Task Manager',
      description: 'A productivity app with AI-powered task prioritization, deadline prediction, and team collaboration features.',
      tech: ['React.js', 'MongoDb', 'Material UI', 'Chart.js'],
      github: 'https://github.com/shauryasds/Task-management-system',
      live: 'http://task-management-system-frontend-amber.vercel.app',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Vintage Holistic Center',
      description: 'A holistic wellness platform (SOLD to client ) offering plans, online consultations, and wellness resources.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
      live: 'https://vintageholistic.vercel.app',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950 relative border-t border-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that actually solve problems.
            <span className="text-emerald-400"> No "Hello World" apps here</span> – just real solutions for real people.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-xl border transition-all duration-300 hover:transform hover:scale-[1.02] ${project.featured
                ? 'lg:col-span-2 bg-gray-900/50 border-emerald-500/30 hover:border-emerald-500/50'
                : 'bg-gray-950/50 border-gray-800 hover:border-emerald-500/30'
                }`}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'grid-cols-1'} h-full`}>
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64   object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  {project.award && (
                    <div className="absolute top-4 left-4 bg-emerald-500 text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Award size={16} className="mr-1" />
                      Award Winner
                    </div>
                  )}
                </div>

                <div className="p-6 lg:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    {project.award && (
                      <div className="mb-3">
                        <span className="text-emerald-400 text-sm font-medium">{project.award}</span>
                      </div>
                    )}
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="bg-gray-900/50 text-emerald-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors group"
                    >
                      <Github size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                      <span className="font-medium">Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group"
                      >
                        <ExternalLink size={20} className="mr-2 group-hover:scale-110 transition-transform" />
                        <span className="font-medium">Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shauryasds"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-900/50 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 border border-gray-800 hover:border-emerald-500"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>

        {/* Easter Egg */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-950/30 p-6 rounded-xl border border-gray-800">
            <p className="text-gray-400 text-sm">
              <span className="text-emerald-400">Pro tip:</span> Each project taught me something new.
              The best part? They all actually work in production!
              <span className="text-gray-500">(No "it works on my machine" here)</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;