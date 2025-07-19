import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Palette,
  Server,
  Brain,
  Wrench,
  Globe,
  Smartphone
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Code2 className="text-emerald-400" size={24} />,
      skills: ['React.js', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Material UI'],
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      title: 'Backend Development',
      icon: <Server className="text-green-400" size={24} />,
      skills: ['Node.js', 'Express.js', 'Java', 'Python', 'RESTful APIs'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Database & Storage',
      icon: <Database className="text-blue-400" size={24} />,
      skills: ['MongoDB', 'SQL', 'PostgreSQL', 'Supabase'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-purple-400" size={24} />,
      skills: ['Generative AI', 'OpenAI API', 'LangChain', 'LangGraph'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Tools & DevOps',
      icon: <Wrench className="text-orange-400" size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Design & UI/UX',
      icon: <Palette className="text-pink-400" size={24} />,
      skills: ['Figma', 'Responsive Design', 'User Experience', 'Prototyping'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const proficiencyLevels = [
    { name: 'JavaScript', level: 95, color: 'bg-emerald-500' },
    { name: 'React.js', level: 92, color: 'bg-emerald-500' },
    { name: 'Node.js', level: 88, color: 'bg-green-500' },
    { name: 'Python', level: 85, color: 'bg-blue-500' },
    { name: 'MongoDB', level: 87, color: 'bg-green-500' },
    { name: 'Java', level: 82, color: 'bg-orange-500' },
  ];

  return (
    <section id="skills" className="py-20 bg-black relative border-t border-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-emerald-400">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My arsenal of technologies that help me craft digital experiences.
            <span className="text-emerald-400"> Still learning new things daily</span> (because technology never sleeps).
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-950/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-900/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-emerald-500/50 hover:text-emerald-300 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Proficiency <span className="text-emerald-400">Levels</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {proficiencyLevels.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-950/30 p-4 rounded-lg border border-gray-800"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-emerald-400 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`h-2 rounded-full ${skill.color}`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Fact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-950/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <p className="text-gray-300 text-lg mb-2">
              <span className="text-emerald-400 font-semibold">Fun Fact:</span> I once fixed a bug by adding a semicolon.
              <br />
              It took me 3 hours to realize JavaScript doesn't really need them. 🤦‍♂️
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;