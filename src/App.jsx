import React from 'react';

import { ThemeProvider } from './contexts/TheamContext'
import Header from './components/Header'


import { useState, useEffect } from 'react';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Blog from './components/sections/Blog';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contect';
import Loader from './components/ui/Loader';

function App() {
  
     const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader/>;
  }

  

  return (
    <ThemeProvider>
       <div className='min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300'>
      <Header/>
       <Hero/>
       <About/>
       <Skills/>
       <Projects/>
       <Blog/>
       
       {/* <Testimonials/> */}
        <Contact/>
       <Footer/>
       </div>
    </ThemeProvider>
  );
}

export default App;