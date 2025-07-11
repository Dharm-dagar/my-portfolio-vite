import React from 'react';
import { motion } from 'framer-motion';
import { FaFilePdf } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <div className="about" id="about">
      <h1 className="section__heading">About</h1>

      <div className="about__section">
        <motion.div
          className="about__text"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          I'm a Software Developer and B.Tech CSE student at IIIT Vadodara (2026 batch).
          Currently working as an SDE Intern & Team Lead at Coder Edge Technology Pvt. Ltd.
          I specialize in Frontend Development using React.js, Tailwind CSS, and FastAPI.
          Passionate about building real-world, user-focused applications.
          Built projects like an AI-powered Resume Screener and Car Damage Detection System.
          Developed a C++ Movie Booking System using design patterns like Singleton, Factory, and Strategy.
          Achieved top ranks in national hackathons and led cross-functional development teams.
          I value clean code, scalability, and great UI/UX experiences.
          Actively sharpening my skills in DSA, System Design, and problem-solving.
          Driven by a vision to build tech that truly makes an impact.

          {/* Resume Button */}
          <motion.div
            className="about__buttons"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <a
              href="/assets/Dharm_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              title="View my resume"
              className="resume-btn"
            >
              <FaFilePdf style={{ marginRight: '8px' }} />
              Resume
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
