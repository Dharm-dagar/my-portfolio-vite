import React from 'react';
import { GrLinkedinOption, GrGithub, GrMail } from 'react-icons/gr';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <motion.p
        className="footer__socialHead"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        &lt;Social /&gt;<br />
      </motion.p>

      <motion.ul
        className="footer__social"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://www.linkedin.com/in/dharm-singh-dagar-4bb36628a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrLinkedinOption />
        </a>
        <a
          href="https://github.com/Dharm-dagar"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrGithub />
        </a>
        <a
          href="mailto:dharm31503@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GrMail />
        </a>
      </motion.ul>

      <motion.h3
        className="footer__head"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Designed and Developed By Dharm Singh
      </motion.h3>
    </div>
  );
};

export default Footer;
