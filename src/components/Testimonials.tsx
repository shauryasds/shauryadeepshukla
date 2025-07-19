import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Victor Mondal',
      role: 'Manager',
      company: 'Manasio',
      content: 'Shaurya jumped into our workflow amazingly well took full ownership. Quick learner, fast delivery, and not afraid to ask the right questions. 10/10 would work with again.',
      rating: 5
    },
    {
      name: 'Amit K.',
      role: 'Co-Founder',
      company: 'Webchilly',
      content: 'Joined as an Gen Ai intern, left as a React wizard. Shaurya’s ability to pick up new tech is like watching a cat learn to use a toilet – impressive.',
      rating: 5
    },
    {
      name: 'Shahid Afraid',
      role: 'Founder',
      company: 'Mashoorme',
      content: 'This guy joined as a "WordPress intern" and ended up learning React in under a month. Can’t decide if it’s inspiring or annoying, but it definitely worked.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-950 relative border-t border-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What People <span className="text-emerald-400">Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Testimonials from mentors, managers, and founders.
            <span className="text-emerald-400"> Real (and mildly sarcastic) feedback</span> from those I've worked with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-950/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-emerald-500/30 transition-all duration-300 group relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
                <Quote size={40} className="text-emerald-400" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info (Text Only) */}
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-emerald-400 text-sm">{testimonial.role}</p>
                <p className="text-gray-400 text-xs">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
