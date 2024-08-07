import React, { useState, useEffect, useContext } from "react";
import { ScrollContext } from  "../../Context";
import "./Projects.css"
import HeirBnB from "./HeirBnB";
import Chimera from "./Chimera";
import Sneax from "./Sneax";
import FeelBrite from "./FeelBrite";
import { CSSTransition, TransitionGroup } from "react-transition-group";


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState('HeirBnB');

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  const renderProjectDetails = () => {
    switch (selectedProject) {
      case "HeirBnB":
        return <HeirBnB />;
      case "Chimera":
        return <Chimera />;
      case "Sneax":
        return <Sneax />;
      case "FeelBrite":
        return <FeelBrite />;
      default:
        return null;
    }
  };
  
  const { projectsRef } = useContext(ScrollContext);

  

 return (
    <section ref={projectsRef} className="project" id="projects">
      <h2>Projects</h2>
      <div className="projectContainer">
        <button
          className={`h2 ${selectedProject === "HeirBnB" ? "active" : ""}`}
          onClick={() => handleProjectClick("HeirBnB")}
        >
          HeirBnB
        </button>
        <button
          className={`h2 ${selectedProject === "Chimera" ? "active" : ""}`}
          onClick={() => handleProjectClick("Chimera")}
        >
          Chimera
        </button>
        <button
          className={`h2 ${selectedProject === "Sneax" ? "active" : ""}`}
          onClick={() => handleProjectClick("Sneax")}
        >
          Sneax
        </button>
        <button
          className={`h2 ${selectedProject === "FeelBrite" ? "active" : ""}`}
          onClick={() => handleProjectClick("FeelBrite")}
        >
          FeelBrite
        </button>
      </div>
      <TransitionGroup className="projectDetails">
        <CSSTransition
          key={selectedProject}
          timeout={500}
          classNames="fade"
        >
          <div>
            {renderProjectDetails()}
          </div>
        </CSSTransition>
      </TransitionGroup>

    </section>
  );
};

export default Projects