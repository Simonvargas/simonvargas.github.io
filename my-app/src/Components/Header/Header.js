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
    </nav>
  );
}

  export default Header