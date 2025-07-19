import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Award, Calendar, MapPin, Trophy, Target } from 'lucide-react';
import { Rocket, Activity, Layers } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
const Experience = () => {

  const experiences = [
    {
      title: 'Software Developer Intern',
      company: 'Beta Test Solutions',
      location: 'Remote',
      duration: 'July 2025 – Present',
      type: 'Internship',
      description: [
        'Built and integrated an LLM-powered chatbot now handling 500+ user queries weekly.',
        'Developed dynamic React.js components and Node.js APIs for real-time interaction.',
        'Improved support efficiency by 35%, reducing manual intervention significantly.'
      ],
      tech: ['React.js', 'Node.js', 'OpenAI API', 'MongoDB'],
      icon: <Briefcase className="text-cyan-400" size={24} />
    },
    {
      title: 'Software Developer Intern',
      company: 'Manasio Pvt Limited',
      location: 'Remote',
      duration: 'Feb 2025 – June 2025',
      type: 'Internship',
      description: [
        'Built a Tax Management System used by 200+ clients, reducing manual tax filing time by 40%.',
        'Designed responsive React.js components and optimized MongoDB queries, reducing API response time by 15%.',
        'Collaborated in a 5-member Agile team, leading sprint planning and code reviews.'
      ],
      tech: ['React.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      icon: <Rocket className="text-purple-400" size={24} />
    },
    {
      title: 'Freelance MERN & Gen AI Trainer',
      company: 'Webchily',
      location: 'Remote',
      duration: 'Apr 2025 – May 2025',
      type: 'Freelance',
      description: [
        'Trained 60+ learners to build real-time chatbots using the MERN stack and OpenAI APIs.',
        'Led hands-on sessions on Vercel deployment and designing scalable architectures.',
        'Achieved 98.29% participant satisfaction based on post-training feedback.'
      ],
      tech: ['MERN Stack', 'OpenAI API', 'Vercel', 'Postman'],
      icon: <Target className="text-emerald-400" size={24} />
    },
    {
      title: 'Wordpress Developer Intern',
      company: 'Mashoorme',
      location: 'Remote',
      duration: 'Jul 2023 – Oct 2023',
      type: 'Internship',
      description: [
        'Started with WordPress—clicked some buttons, called it web dev.',
        'Got tired of dragging and dropping, so I picked up React and actually learned to code (within a month).',
        'Built a css+js website that was so fast, even the WordPress site owners were impressed.',
        'Realized I could do more than just themes and plugins, so I moved on to real coding.'
      ],
      tech: ['WordPress', 'Html', 'CSS', 'JavaScript'],
      icon: <Activity className="text-yellow-400" size={24} />
    }

  ];



  const achievements = [
    {
      title: 'Build with India Hackathon 2025',
      description: 'Finalist – Top 10%',
      project: 'HireAI Platform',
      date: 'Dec 2024',
      icon: <Trophy className="text-yellow-400" size={20} />
    },
    {
      title: 'THE Hack-Hackathon',
      description: 'Winner – Best Use of AI ',
      project: 'Gen AI based Task Management',
      date: 'Aug 2024',
      icon: <Award className="text-emerald-400" size={20} />
    },
    {
      title: 'LeetCode Milestone',
      description: 'Solved 200+ problems (and cried over half of them)',
      project: 'DSA Mastery (almost)',
      date: '2024',
      icon: <CheckCircle className="text-cyan-400" size={20} />
    },
    {
      title: 'Innovest 2.0 ',
      description: 'Ranked 154th out of 1,000+',
      project: 'Timed Problem Solving',
      date: 'Mar 2024',
      icon: <Target className="text-orange-400" size={20} />
    }
  ];


  return (
    <section id="experience" className="py-20 bg-black relative border-t border-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience & <span className="text-emerald-400">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey through internships, hackathons, and real-world projects.
            <span className="text-emerald-400"> Building experience one commit at a time.</span>
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Professional <span className="text-emerald-400">Experience</span>
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-emerald-600"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                {/* Timeline Node */}
                <div className="absolute left-6 top-2 w-4 h-4 bg-emerald-400 rounded-full border-4 border-black"></div>

                <div className="bg-gray-950/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-center mb-2 lg:mb-0">
                      {exp.icon}
                      <h4 className="text-xl font-semibold text-white ml-3">{exp.title}</h4>
                    </div>
                    <span className="bg-emerald-900/30 text-emerald-300 px-3 py-1 rounded-full text-sm border border-emerald-600/30">
                      {exp.type}
                    </span>
                  </div>

                  <div className="text-gray-300 mb-4">
                    <div className="flex items-center mb-2">
                      <span className="text-emerald-400 font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {exp.location}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      {exp.duration}
                    </div>
                  </div>

                  <ul className="text-gray-300 space-y-2 mb-4">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-emerald-400 mr-2 mt-1.5">•</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-900/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Awards & <span className="text-emerald-400">Recognition</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-950/30 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-900/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{achievement.title}</h4>
                <p className="text-emerald-400 font-medium mb-2">{achievement.description}</p>
                <p className="text-gray-400 text-sm mb-2">{achievement.project}</p>
                <p className="text-gray-500 text-xs">{achievement.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-950/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <h4 className="text-xl font-semibold text-white mb-4">Current Status</h4>
            <p className="text-gray-300 text-lg">
              🎓 <span className="text-emerald-400">Final Year Student</span> at Krishna Institute of Technology
              <br />
              🚀 <span className="text-emerald-400">Actively seeking</span> full-time opportunities in software development
              <br />
              💼 <span className="text-green-400">Open for</span> freelance projects and collaboration
            </p>
            <div className="mt-6">
              <a href='#contact' className="bg-emerald-500 hover:bg-emerald-600 text-black px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Let's Work Together
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;