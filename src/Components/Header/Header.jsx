import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiOutlineX } from 'react-icons/hi';
import './Header.css';

function Header() {
  const [showNav, setShowNav] = useState(false);

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="main__navbar">

        {/* Optional Logo Text */}
        <div className="navbar__logo">Dharm Singh</div>

        <ul className="navbar__list--desktop">
          <li><a href="/">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li>
            <a
              href="#contact"
              className="navbar__contactBtn"
            >
              CONTACT
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <span
          className="navbar__mobile--icon"
          onClick={() => setShowNav(prev => !prev)}
        >
          {showNav ? <HiOutlineX /> : <HiMenuAlt3 />}
        </span>

        {/* Mobile Menu */}
        <ul className={showNav ? 'navbar__list--mobile navbar__list--mobileShow' : 'navbar__list--mobile'}>
          <li><a href="/">HOME</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Header;
