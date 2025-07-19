import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  MessageCircle,
  Coffee
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const { name, email, subject, message } = formData;

  const mailtoLink = `mailto:shauryadeep589@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  window.location.href = mailtoLink;
};

  const contactInfo = [
    {
      icon: <Mail className="text-emerald-400" size={24} />,
      label: 'Email',
      value: 'shauryadeep589@gmail.com',
      link: 'mailto:shauryadeep589@gmail.com'
    },

    {
      icon: <MapPin className="text-blue-400" size={24} />,
      label: 'Location',
      value: 'India',
      link: null
    },
    {
      icon: <Calendar className="text-emerald-400" size={24} />,
      label: 'Availability',
      value: 'Open for opportunities',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/shauryadeepshukla',
      color: 'hover:text-gray-300'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/shauryadeepshukla',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Twitter size={24} />,
      label: 'Twitter',
      url: 'https://twitter.com/shauryadeep',
      color: 'hover:text-emerald-400'
    },
    {
      icon: <MessageCircle size={24} />,
      label: 'Discord',
      url: 'https://discord.com/users/shaurya#1234',
      color: 'hover:text-purple-400'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-black relative border-t border-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-emerald-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to build something amazing together? Drop me a line!
            <span className="text-emerald-400"> I promise my response time is faster than my code compilation.</span>
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-950/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                  placeholder="Let's build something awesome!"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project idea, or just say hi!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-black py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                ) : (
                  <>
                    <Send size={20} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center group"
                  >
                    <div className="p-3 bg-gray-950/50 rounded-lg border border-gray-800 group-hover:border-emerald-500/30 transition-all duration-200">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white hover:text-emerald-400 transition-colors duration-200 font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Find me online</h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className={`p-3 bg-gray-950/50 rounded-lg border border-gray-800 text-gray-400 ${social.color} transition-all duration-200 hover:border-emerald-500/30 hover:scale-110`}
                    title={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <a
                  href="mailto:shauryadeep589@gmail.com?subject=Let's collaborate!"
                  className="flex items-center justify-between bg-gray-950/30 p-4 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition-all duration-200 group"
                >
                  <span className="text-gray-300 group-hover:text-white">💼 Hire me for a project</span>
                  <Mail size={20} className="text-emerald-400" />
                </a>

                <a
                  href="mailto:shauryadeep589@gmail.com?subject=Coffee chat?"
                  className="flex items-center justify-between bg-gray-950/30 p-4 rounded-lg border border-gray-800 hover:border-orange-500/50 transition-all duration-200 group"
                >
                  <span className="text-gray-300 group-hover:text-white">☕ Let's grab coffee</span>
                  <Coffee size={20} className="text-orange-400" />
                </a>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-gray-950/30 p-6 rounded-xl border border-gray-800">
              <p className="text-gray-300 text-sm">
                <span className="text-emerald-400 font-semibold">Fun fact:</span> I usually respond to emails
                within 24 hours, unless I'm debugging CSS. In that case, it might take a bit longer. 😅
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
