import React, { useState, useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
//import Logo from './finalLogo.png';

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import TechTimeline from './Components/Timeline/TechTimeline';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen text-gray-900 dark:text-gray-100 bg-gradient-to-br from-blue-100 via-white to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <motion.div
            className="app__loaderImageParent"
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* <img className="w-40 h-40" src={Logo} alt="logo" /> */}
          </motion.div>
        </div>
      ) : (
        <>
          <Header />
          <Home />
          <Projects />
          <About />
          <Skills />
           <TechTimeline />
          <Contact />
         
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
