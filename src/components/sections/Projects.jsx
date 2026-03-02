import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';
import Button from '../ui/Button';
import { image } from 'framer-motion/client';
import image1 from "../../assets/image/E-commerce.png"
import image2 from "../../assets/image/Blog.png"
import image3 from "../../assets/image/pokemon.png"
import image4 from "../../assets/image/weather.png"


const Projects = () => {
  const projects = [
    {
      title: 'E-COMMERCE',
      description: 'A full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
      techStack: ['React.js', 'Tailwindcss','Redux-Toolkit'],
      github: 'https://github.com/Somesh-tiw/frontend',
      live: 'https://frontend-sooty-one-62.vercel.app/',
      image:  image1
    },
    {
      title: 'BLOG-APP',
      description: 'Built a full-stack Blog App with authentication and CRUD functionality using the MERN stack. Implemented protected routes, REST APIs, and responsive UI for seamless user experience.',
      techStack: ['React.js','Express.js','Node.js','Tailwind Css'],
      github: 'https://github.com/Somesh-tiw/blog-app',
      live: 'https://blog-app-theta-smoky.vercel.app/',
      image: image2,
    },
    {
      title: 'Pokemon-Game',
      description: 'A comprehensive dashboard for managing multiple social media accounts with analytics, scheduling, and content management.',
      techStack: ['React','Tailwind CSS','Context Api'],
      github: 'https://somesh-tiw.github.io/pokemon-game/',
      live:   'https://pokemon-game-xi-cyan.vercel.app/',
      image: image3,
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and weather alerts.',
      techStack: ['JavaScript', 'OpenWeather API', 'HTML5 & CSS'],
      github: 'https://somesh-tiw.github.io/Weather-App-Forecast/',
      live: 'https://somesh-tiw.github.io/Weather-App/',
      image: image4,
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