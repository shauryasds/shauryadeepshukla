import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years of Coding', value: '4+' },
    { label: 'Projects Built', value: '25+' },
    { label: 'Hackathons Participated', value: '4' },
    { label: 'Coffee Cups', value: '∞' },
  ];

  return (
    <section id="about" className="py-20 bg-gray-950 relative border-t border-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            About <span className="text-emerald-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="prose prose-lg text-gray-300"
              >
                <p className="text-xl leading-relaxed mb-6">
                  Hi, I'm <span className="text-emerald-400 font-semibold">Shaurya Deep Shukla</span> –
                  a final-year Computer Science student who believes that good code is like a good joke:
                  if you have to explain it, it's probably not that good.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  I specialize in the <span className="text-emerald-400">MERN stack</span> and
                  <span className="text-emerald-300"> Generative AI</span>, turning caffeine into
                  scalable solutions that actually work in production. When I'm not debugging
                  someone else's "temporary" fix from 2019, I\'m building products that solve
                  real problems.
                </p>

                <p className="text-lg leading-relaxed">
                  Currently making my way through Krishna Institute of Technology (2026),
                  previously survived Heritage International School. I'm that developer who
                  actually reads the documentation... sometimes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-8 space-y-4"
              >
                <div className="flex items-center text-gray-300">
                  <GraduationCap className="text-emerald-400 mr-3" size={20} />
                  <span>Computer Science Engineering, Krishna Institute of Technology</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="text-emerald-400 mr-3" size={20} />
                  <span>Graduating 2026</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Award className="text-emerald-400 mr-3" size={20} />
                  <span>Build with India Hackathon 2025 Finalist (Top 10%)</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="text-emerald-400 mr-3" size={20} />
                  <span>India</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 text-center hover:bg-gray-900/80 hover:border-emerald-500/30 transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-emerald-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gray-900/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
              <p className="text-gray-300 text-lg">
                <span className="text-emerald-400 font-medium">"The only way to do great work is to love what you do."</span>
                <br />
                – Steve Jobs (and also me, when my code compiles on the first try)
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;