import React from 'react';
import { motion } from 'framer-motion';
import ProjectComps from './ProjectComps/ProjectComps';
import './Projects.css';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.h1
          className="projects-heading-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h1>

        <div className="projects-list">
          <ProjectComps
            title="Car Damage Assessment"
            desc="A web app to detect car damage location and severity from videos using YOLO and Pytorch."
            langs={['YOLOv1n', 'PyTorch', 'Computer Vision', 'ReactJs']}
            githubLink="https://github.com/Dharm-dagar/car-damage-dashboard"
            howBuilt={{
              tools: 'YOLOv1n, PyTorch, React.js, FastAPI',
              problems: 'Detecting damage zones from multiple angles with consistent accuracy.',
              design: 'Modular video frame processing with asynchronous frontend pipeline.'
            }}
          />

          <ProjectComps
            title="AI-powered Resume Screening"
            desc="AI tool to match candidate resumes to job roles based on skills and experience using OpenAI."
            langs={['ReactJs', 'FastAPI', 'TailwindCSS', 'OpenAI API']}
            githubLink="https://github.com/Dharm-dagar/AI-Powered-Resume-Screening-Job-Matching-System"
            howBuilt={{
              tools: 'React.js, FastAPI, OpenAI API, Zustand, Tailwind CSS',
              problems: 'Skill-matching relevance & token cost optimization with OpenAI.',
              design: 'Frontend state managed with Zustand, clean UX using Tailwind.'
            }}
          />

          <ProjectComps
            title="Task Management App"
            desc="Responsive task management app with CRUD features, built using React and FastAPI."
            langs={['ReactJs', 'TailwindCSS', 'FastAPI']}
            githubLink="https://github.com/Dharm-dagar/task-management"
            howBuilt={{
              tools: 'React.js, Tailwind CSS, FastAPI',
              problems: 'State persistence & reactivity for task status.',
              design: 'Simple CRUD logic with intuitive component separation.'
            }}
          />

          <ProjectComps
            title="Movie Booking System"
            desc="Console-based C++ project using OOP and design patterns to simulate ticket booking."
            langs={['C++', 'OOP', 'Design Patterns']}
            githubLink="https://github.com/Dharm-dagar/movie-booking-system"
            howBuilt={{
              tools: 'C++, Singleton, Factory, Strategy Patterns',
              problems: 'Avoiding tight coupling between booking & seating logic.',
              design: 'Each module encapsulated by design pattern responsibility.'
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
