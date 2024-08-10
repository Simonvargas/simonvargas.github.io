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
    <div>
      <h2 className="h2Projects">Featured Work</h2>
    <section ref={projectsRef} className="projectsSection" id="projects">
      <div>
      <a href="https://github.com/simonvargas/HeirBnB"
          target="_blank"
          className="a2"
          rel="noreferrer"
          >
  <div className="projectCard">
      <img className="projectImg" src={`${process.env.PUBLIC_URL}/images/heirbnb1.png`} alt="Heirbnb project"></img>
    <div className="textContainer">
      <h3>HeirBnB</h3>
      <p>Travel accommodation booking Application</p>
    </div>
  </div>
  </a>
  </div>

  <div>
      <a href="https://github.com/simonvargas/Chimera"
          target="_blank"
          className="a2"
          rel="noreferrer"
          >
  <div className="projectCard">
    <div className="imageContainer">
      <img className="projectImg" src={`${process.env.PUBLIC_URL}/images/chimera1.png`} alt="Heirbnb project"></img>
    </div>
    <div className="textContainer">
      <h3>Chimera</h3>
      <p>Crowdfunding platform</p>
    </div>
  </div>
  </a>
  </div>

  <div>
      <a href="https://github.com/simonvargas/Sneax"
          target="_blank"
          className="a2"
          rel="noreferrer"
          >
  <div className="projectCard">
    <div className="imageContainer">
      <img className="projectImg" src={`${process.env.PUBLIC_URL}/images/sneax1.png`} alt="Heirbnb project"></img>
    </div>
    <div className="textContainer">
      <h3>Sneax</h3>
      <p>Investment Trading App</p>
    </div>
  </div>
  </a>
  </div>
  
</section>
</div>
  );
};

export default Projects;
