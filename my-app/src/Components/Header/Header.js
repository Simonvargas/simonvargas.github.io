import React, { useContext} from "react";
import "./Header.css"
import { ScrollContext } from "../../Context";

function Header() {

   const { homeRef, aboutMeRef, projectsRef, technologiesRef, contactRef } = useContext(ScrollContext);

   const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
    return (
      <nav>
      <a class="links" onClick={() => scrollToSection(homeRef)}>Welcome</a>
      <a class="links" onClick={() => scrollToSection(aboutMeRef)}>About Me</a>
      <a class="links" onClick={() => scrollToSection(projectsRef)}>Projects</a>
      <a class="links" onClick={() => scrollToSection(technologiesRef)}>Technologies</a>
      <a class="links" onClick={() => scrollToSection(contactRef)}>Get in touch</a>
    </nav>
    
    );
  }

  export default Header