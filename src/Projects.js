import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import wildcast from './wildcast1.jpg';
import projectWildcastVideo from './project_wildcast.mp4'; // Import video
import clickyy  from './clicky_crate.png'
import click from './clicky_crate.mp4'

// import game2 from './game2.jpg';

const projects = [
  {
    id: 'wildcast',
    title: "Wildcast Isle",
    description: "A thrilling action-adventure game.",
    image: wildcast,
    video: projectWildcastVideo, // Path to the video file
  },
  {
    id: 'game2',
    title: "Clicky Crate",
    description: "A puzzle game with a unique twist.",
    image: clickyy,
    video: click , // Path to the video file
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/game/${project.id}`} className="project-link">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;