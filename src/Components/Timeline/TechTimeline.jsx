import React from 'react';
import { motion } from 'framer-motion';
import './TechTimeline.css';

const timelineData = [
  { year: "2022", title: "Started C++ & DSA", desc: "Solved 400+ problems and learned core programming." },
  { year: "2023", title: "Frontend Development", desc: "Mastered React.js, Tailwind CSS, and built UI clones." },
  { year: "2024", title: "Backend & Full Stack", desc: "Built projects with FastAPI, MongoDB, and led hackathon teams." },
  { year: "2025", title: "Internship + System Design", desc: "SDE Intern, learning HLD, LLD, and working in real-world teams." },
];

function TechTimeline() {
  return (
    <div className="timeline" id="timeline">
      <h2 className="timeline__heading">My Tech Journey</h2>
      <div className="timeline__container">
        {timelineData.map((item, index) => (
          <motion.div
            className="timeline__card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline__year">{item.year}</div>
            <div className="timeline__content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default TechTimeline;
