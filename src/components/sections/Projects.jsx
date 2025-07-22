import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import Button from '../ui/Button';
import { image } from 'framer-motion/client';


const Projects = () => {
  const projects = [
    {
      title: 'Student Details',
      description: 'A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
      techStack: ['React', 'Tailwindcss'],
      github: 'https://github.com/someshtiwari/ecommerce-platform',
      live: 'https://studentapp-six-kappa.vercel.app/',
      image:  'https://miro.medium.com/v2/resize:fit:1400/1*p-Cp_e81eE3_dLTWAaOYjw.png'
    },
    {
      title: 'Todo App',
      description: 'A simple and responsive Todo App built with React and Tailwind CSS. Add, delete, and manage tasks effortlessly with a clean UI and smooth interactive experience.',
      techStack: ['React','Tailwind Css'],
      github: ' https://somesh-tiw.github.io/alltodos/',
      live: 'https://alltodos.vercel.app/',
      image: 'https://img.freepik.com/premium-vector/hand-drawing-todo-list-with-neat-organized-design_462371-4782.jpg',
    },
    {
      title: 'Pokemon-Game',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and content management.',
      techStack: ['React', 'Tailwind CSS',  ],
      github: 'https://somesh-tiw.github.io/pokemon-game/',
      live:   'https://pokemon-game-xi-cyan.vercel.app/',
      image: 'https://assets-prd.ignimgs.com/2024/02/02/all-pokemon-games-switch-1706832326621.png',
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
      techStack: ['JavaScript', 'OpenWeather API', 'HTML5 & CSS'],
      github: 'https://somesh-tiw.github.io/Weather-App-Forecast/',
      live: 'https://somesh-tiw.github.io/Weather-App/',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    href={project.github}
                    variant="outline"
                    size="sm"
                    icon={Github}
                  >
                    Code
                  </Button>
                  <Button
                    href={project.live}
                    size="sm"
                    icon={ExternalLink}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;