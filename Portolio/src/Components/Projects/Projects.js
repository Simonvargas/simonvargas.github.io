import React, { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../../Context/Context";
import "./Projects.css";
import HeirBnB from "./HeirBnB";
import Chimera from "./Chimera";
import Sneax from "./Sneax";
import FeelBrite from "./FeelBrite";

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
    <div ref={projectsRef} id="projects">
      <section className="projectContainer" id="projects">
        <div className="sidebarContainer">
          <h2>Projects</h2>
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
        <div className="projectDetails">{renderProjectDetails()}</div>
      </section>

      <div className="bigContainer">
        <section className="projectsSection">
          <h2 className="h2Projects">Projects</h2>
           
            <a
              href="https://github.com/simonvargas/HeirBnB"
              target="_blank"
              className="a2"
              rel="noreferrer"
            >
              <div className="projectCard">
                <img
                  className="projectImg1"
                  src={`${process.env.PUBLIC_URL}/images/heirbnb1.png`}
                  alt="Heirbnb project"
                ></img>
                <div className="textContainer">
                  <h3>HeirBnB</h3>
                  <p>Travel Lodging Platform</p>
                </div>
              </div>
            </a>

          <div>
            <a
              href="https://github.com/simonvargas/Chimera"
              target="_blank"
              className="a2"
              rel="noreferrer"
            >
              <div className="projectCard">
                  <img
                    className="projectImg1"
                    src={`${process.env.PUBLIC_URL}/images/chimera1.png`}
                    alt="Chimera project"
                  ></img>
                <div className="textContainer">
                  <h3>Chimera</h3>
                  <p>Crowdfunding Platform</p>
                </div>
              </div>
            </a>
          </div>

          <div>
            <a
              href="https://github.com/simonvargas/Sneax"
              target="_blank"
              className="a2"
              rel="noreferrer"
            >
              <div className="projectCard">
                  <img
                    className="projectImg1"
                    src={`${process.env.PUBLIC_URL}/images/sneax1.png`}
                    alt="Snea Project project"
                  ></img>
                <div className="textContainer">
                  <h3>Sneax</h3>
                  <p>Investment Trading</p>
                </div>
              </div>
            </a>
          </div>

          <div>
            <a
              href="https://github.com/simonvargas/FeelBrite"
              target="_blank"
              className="a2"
              rel="noreferrer"
            >
              <div className="projectCard">
                  <img
                    className="projectImg1"
                    src={`${process.env.PUBLIC_URL}/images/feelbrite3.png`}
                    alt="FeelBrite project"
                  ></img>
                <div className="textContainer">
                  <h3>FeelBrite</h3>
                  <p>Enrollment and Scheduling Platform</p>
                </div>
              </div>
            </a>
          </div>

          <div>
            <a
              href="https://github.com/simonvargas/FiveCents"
              target="_blank"
              className="a2"
              rel="noreferrer"
            >
              <div className="projectCard">
                  <img
                    className="projectImg1"
                    src={`${process.env.PUBLIC_URL}/images/FiveCent.png`}
                    alt="FiveCents Splash"
                  ></img>
                <div className="textContainer">
                  <h3>FiveCents</h3>
                  <p>Business Review Platform</p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
