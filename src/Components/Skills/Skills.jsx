import React from 'react';
import './Skills.css';

const skills = [
  //{ name: 'Next.js', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Redux', level: 88 },
  { name: 'JavaScript', level: 92 },
  //{ name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 88 },
  //{ name: 'Express.js', level: 90 },
  { name: 'MongoDB', level: 85 },
  { name: 'PostgreSQL', level: 75 },
  { name: 'Tailwind', level: 80 },
  { name: 'Git/GitHub', level: 82 },
  { name: 'REST API', level: 85 },
  { name: 'Python', level: 85 },
  { name: 'OOPs', level: 85 },
  { name: 'design patterns', level: 85 },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <label>{skill.name}</label>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
