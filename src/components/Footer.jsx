import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Somesh-tiw' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/somesh-tiwari-67b0b3265/' },
    { name: 'Email', icon: Mail, href: 'someshtiwari457@gmail.com' },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Somesh Tiwari
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              © 2024 All rights reserved.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <link.icon className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;