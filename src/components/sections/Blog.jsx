import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, ExternalLink, Github } from 'lucide-react';
import Button from '../ui/Button';


const Blog = () => {
  const blogPosts = [
    {
         title: 'Green Geeks',
         description: "I created a responsive clone of the GreenGeeks website using HTML and CSS, featuring a clean layout, modern design, and mobile-friendly structure.",
         techStack: ["HTML5","CSS"],
         github: 'https://github.com/Somesh-tiw/Greengeeks',
         live: 'https://somesh-tiw.github.io/Greengeeks/',
         image:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiaZ9UA7xHjjWMwQlQFtL_bz2SguFEzgBEvA&s'
       },
   {
        title: 'WhatsApp Clone',
        description: 'I created a WhatsApp clone using HTML and CSS, replicating the chat interface with responsive design, chat bubbles, sidebar, and modern UI elements.',
        techStack: ["HTML5","CSS"],
        github: 'https://github.com/Somesh-tiw/practice-day-7',
        live: 'https://somesh-tiw.github.io/practice-day-7/',
        image:  'https://www.internetmatters.org/wp-content/uploads/2024/10/Whatsapp-logo-pc.png'
      },
    {
         title: 'NetFlix Clone',
         description: 'I created a responsive Netflix clone using HTML and CSS, featuring a sleek homepage layout with banner, movie thumbnails, and a modern streaming platform design.',
         techStack:  ["HTML5","CSS"],
         github: 'https://github.com/Somesh-tiw/day-12-practice',
         live: 'https://somesh-tiw.github.io/day-12-practice/',
         image:  'https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_lim.size_1050x591.v1582751026.png'
       },

    
  ];

  const Uidesign=[
       {
         title: 'AMU UI',
         description: "I created a responsive clone of the GreenGeeks website using HTML and CSS, featuring a clean layout, modern design, and mobile-friendly structure.",
         techStack: ["HTML5","CSS"],
         github: 'https://github.com/Somesh-tiw/day-12-practice',
         live: 'https://somesh-tiw.github.io/AMU-UI/',
         image:  'https://cdn.dribbble.com/userupload/15687851/file/original-43bd8f4a26ab87ef9d81ad3848a46b0e.jpg?format=webp&resize=1440x&vertical=center'
       },
        {
         title: 'Produce UI',
         description: "I created a responsive clone of the GreenGeeks website using HTML and CSS, featuring a clean layout, modern design, and mobile-friendly structure.",
         techStack: ["HTML5","CSS"],
         github: 'https://github.com/Somesh-tiw/Just_Produce',
         live: ' https://somesh-tiw.github.io/Just_Produce/',
         image:  'https://cdn.dribbble.com/userupload/3182886/file/original-50f74222752e83994c76f20ed83d7c01.png'
       },
        {
         title: 'Cranbery',
         description: "I created a responsive clone of the GreenGeeks website using HTML and CSS, featuring a clean layout, modern design, and mobile-friendly structure.",
         techStack: ["HTML5","CSS"],
         github: 'https://github.com/Somesh-tiw/Cranbery-UI',
         live: ' https://somesh-tiw.github.io/Cranbery-UI/',
         image:  'https://anblik.com/wp-content/uploads/2015/12/myntra-men-tshirts.png'
       },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Clone Design
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
           "I recreate popular websites using HTML, CSS, and JavaScript to sharpen my frontend skills and explore modern UI/UX trends."
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.description}
                </p>

              <div className="flex flex-wrap gap-2 mb-4">
                  {post.techStack.map((tech) => (
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
                    href={post.github}
                    variant="outline"
                    size="sm"
                    icon={Github}
                  >
                    Code
                  </Button>
                  <Button
                    href={post.live}
                    size="sm"
                    icon={ExternalLink}
                  >
                    Live Demo
                  </Button>
                </div>
                
                
                {/* <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.button> */}

                


              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
        
        </motion.div>
      </div>




       <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            UI Design
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  "I craft modern, responsive, and user-friendly UI designs that focus on visual appeal, usability, and seamless user experience."          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {Uidesign.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.description}
                </p>

              <div className="flex flex-wrap gap-2 mb-4">
                  {post.techStack.map((tech) => (
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
                    href={post.github}
                    variant="outline"
                    size="sm"
                    icon={Github}
                  >
                    Code
                  </Button>
                  <Button
                    href={post.live}
                    size="sm"
                    icon={ExternalLink}
                  >
                    Live Demo
                  </Button>
                </div>
                
                
                {/* <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </motion.button> */}

                


              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline">
            View All Posts
          </Button>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Blog;