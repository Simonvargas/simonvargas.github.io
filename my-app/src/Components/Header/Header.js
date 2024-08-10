import React, { useState, useContext} from "react";
import "./Header.css"
import { ScrollContext } from "../../Context/Context";

function Header() {

   const { homeRef, aboutMeRef, projectsRef, technologiesRef, contactRef, activeLink, setActiveLink } = useContext(ScrollContext);

   const scrollToSection = (ref, section)=> {
    setActiveLink(section);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
    return (
      <nav>
      <a 
        className={`links ${activeLink === "home" ? "active" : ""}`} 
        onClick={() => scrollToSection(homeRef, "home")}
      >
        Welcome
      </a>
      <a 
        className={`links ${activeLink === "aboutMe" ? "active" : ""}`} 
        onClick={() => scrollToSection(aboutMeRef, "aboutMe")}
      >
        About Me
      </a>
      <a 
        className={`links ${activeLink === "projects" ? "active" : ""}`} 
        onClick={() => scrollToSection(projectsRef, "projects")}
      >
        Projects
      </a>
      <a 
        className={`links ${activeLink === "technologies" ? "active" : ""}`} 
        onClick={() => scrollToSection(technologiesRef, "technologies")}
      >
        Technologies
      </a>
      <a 
        className={`links ${activeLink === "contact" ? "active" : ""}`} 
        onClick={() => scrollToSection(contactRef, "contact")}
      >
        Get in touch
      </a>
      <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1j7f1ArS_JaqL84lDpetM_cpL792jFoym/edit"
          className="links links1">
          Resume
        </a>
    </nav>
  );
}

  export default Header