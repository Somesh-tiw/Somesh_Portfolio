import React from 'react';
import { motion } from 'framer-motion';
import { Download, Code, Database, Globe } from 'lucide-react';
import Button from '../ui/Button';

const About = () => {
  const technologies = [
    { name: 'HTML', category: 'frontend' },
    { name: 'CSS', category: 'frontend' },
    { name: 'JavaScript', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'MongoDB', category: 'backend' },
  ];

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Database, label: 'Years Experience', value: '1+' },
   
  ];

  return (
    <section id="about" className="py-20 p-10 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my skills, and my journey as a developer
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm a passionate Full Stack Developer with over 1 years of experience 
                creating dynamic web applications. My journey began with a curiosity 
                about how websites work, which evolved into a deep love for coding 
                and problem-solving.
              </p>
              <p>
                I specialize in building scalable applications using modern technologies 
                like React, Node.js, and MongoDB. I believe in writing clean, efficient 
                code and creating user experiences that are both functional and beautiful.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing my knowledge with 
                the developer community.
              </p>
            </div>
            
            <div className="mt-8">
              <Button icon={Download} variant="outline">
                Download Resume
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Technologies I Use
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {technologies.map((tech) => (
                  <motion.div
                    value={tech.name}
                    
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg text-center transition-colors"
                  >
                     <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {tech.name}
                    </span>
                   
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
                Quick Stats
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {stats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg"
                  >
                    <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" />
                    <div>
                      <p className="text-2xl font-bold text-gray-800 dark:text-white">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;