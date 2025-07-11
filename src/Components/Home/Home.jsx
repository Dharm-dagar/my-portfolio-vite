import React from 'react';
import { motion } from 'framer-motion';
import AshImage from '../../Me.jpeg';
import './Home.css'; // Make sure your CSS file is renamed accordingly

function Home() {
  return (
    <section id="home" className="home-container">
      {/* Glowing Card Background */}
      <div className="hero-glow-box">
        {/* Image and Text Section */}
        <div className="home-content">
          {/* Left - Text */}
          <div className="home-text">
            <motion.p
              className="home-greeting"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Hello , I'm
            </motion.p>

            <motion.h1
              className="home-name"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Dharm Singh
            </motion.h1>

            <motion.h3
              className="home-role"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Software Developer 
            </motion.h3>

            <motion.p
              className="home-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Creative Frontend Developer crafting fast, scalable UIs using React, Tailwind, and FastAPI.
Specialized in performance-driven interfaces with a keen eye for user experience.
Skilled in building reusable components and managing complex state architectures.
Passionate about Low-Level Design, clean code, and engineering frontend systems that scale.
            </motion.p>

            <div className="home-buttons">
              <a href="#projects" className="home-btn">Projects</a>
              <a href="#contact" className="home-btn">Contact</a>
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            className="home-image"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src={AshImage} alt="Dharm" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
