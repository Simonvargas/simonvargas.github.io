import React, { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../../Context/Context";
import "./Projects.css";
import HeirBnB from "./HeirBnB";
import Chimera from "./Chimera";
import Sneax from "./Sneax";
import FeelBrite from "./FeelBrite";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState("HeirBnB");

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
    <section ref={projectsRef} className="projectsSection" id="projects">
      <a href="https://github.com/simonvargas/FeelBrite"
          target="_blank"
          className="a2"
          rel="noreferrer"
          >
  <div className="projectCard">
    <div className="imageContainer">
      <img className="projectImg" src={`${process.env.PUBLIC_URL}/images/heirbnb1.png`} alt="Heirbnb project"></img>
    </div>
    <div className="textContainer">
      <h3>Heirbnb</h3>
      <p>Travel accommodation booking Application</p>
    </div>
  </div>
  </a>
</section>
  );
};

export default Projects;
