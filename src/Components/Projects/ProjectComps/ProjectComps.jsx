import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import './ProjectComps.css';

const ProjectComps = ({ title, desc, langs, githubLink, howBuilt }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className="project"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="project__basicInfo">
        <h2 className="project__title">{title}</h2>

        <p className="project__desc">{desc}</p> {/* ✅ Show description right after title */}

        <div className="project__langs">
          {langs.map((lang, index) => (
            <span key={index} className="project__lang">
              {lang}
            </span>
          ))}
        </div>

        <div className="project__links">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>

        {howBuilt && (
          <>
            <button className="howBuilt-btn" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? 'Hide Details' : 'How I Built This'}
            </button>

            {isOpen && (
              <div className="howBuilt__content">
                <p><strong>🛠 Tools Used:</strong> {howBuilt.tools}</p>
                <p><strong>🐞 Problems Solved:</strong> {howBuilt.problems}</p>
                <p><strong>🧠 Key Design Decisions:</strong> {howBuilt.design}</p>
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectComps;
