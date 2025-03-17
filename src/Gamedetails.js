import React from 'react';
import { useParams } from 'react-router-dom';
import projectWildcastVideo from './project_wildcast.mp4'; // Import video
// import clickyy  from './clicky_crate.png'
import click from './clicky_crate.mp4'
// import game2Video from './game2.mp4'; // Import video
import './Gamedetails.css'; // Import CSS

const projects = [
  {
    id: 'wildcast',
    title: "Game 1",
    description: "A thrilling action-adventure game.",
    video: projectWildcastVideo, // Use imported video
  },
  {
    id: 'game2',
    title: "Clicky Crate",
    description: "A puzzle game with a unique twist.",
    video:click, // Use imported video
  },
];

function GameDetails() {
  const { id } = useParams(); // Get the game ID from the URL
  const project = projects.find((p) => p.id === id); // Find the project by ID

  if (!project) {
    return <div>Game not found!</div>;
  }

  return (
    <section className="game-details">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <video controls width="100%">
        <source src={project.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
}

export default GameDetails;