import React, { useState, useEffect } from "react";
import "./Projects.css"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  return (
    <section className="project" id="projects">
      <h2>Projects</h2>
      <div className="projectContainer">
        <button className="h2" onClick={() => handleProjectClick('HeirBnB')}>
          HeirBnB
        </button>
        <button className="h2" onClick={() => handleProjectClick('Chimera')}>
          Chimera
        </button>
        <button className="h2" onClick={() => handleProjectClick('Sneax')}>
          Sneax
        </button>
        <button className="h2" onClick={() => handleProjectClick('FeelBrite')}>
          FeelBrite
        </button>
      </div>
      {selectedProject && (
        <div className="projectDetails">
          <h3>Selected Project: {selectedProject}</h3>
          <p>Details about {selectedProject}...</p>
        </div>
      )}
    </section>
  );
};

export default Projects