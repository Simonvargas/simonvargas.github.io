import React, { useEffect, useState, useContext } from "react";
import "./Header.css";
import { ScrollContext } from "../../Context/Context";

function Header() {
  const {
    homeRef,
    aboutMeRef,
    projectsRef,
    technologiesRef,
    contactRef,
    activeLink,
    setActiveLink,
  } = useContext(ScrollContext);

  const [navOpen, setNavOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const scrollToSection = (ref, section) => {
    setActiveLink(section);
    ref.current.scrollIntoView({ behavior: "smooth" });
    // Trigger the closing animation
    closeNav();
  };

  const openNav = () => {
    document.body.classList.add('nav-open');
    setNavOpen(true);
    setIsClosing(false);
  };

  const closeNav = () => {
    setIsClosing(true);
    setTimeout(() => {
      document.body.classList.remove('nav-open');
      setNavOpen(false);
      setIsClosing(false);
    }, 300); // Match the duration of the closing animation
  };

  const toggleNav = () => {
    if (navOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  return (
    <header>
      
      <nav className={`${navOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}>
      <svg
        onClick={closeNav}
          className="exitBtn"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.620"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
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
          onClick={closeNav}
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1j7f1ArS_JaqL84lDpetM_cpL792jFoym/edit"
          className="links"
        >
          Resume
        </a>
      
      </nav>
      <div className="btnContainer">
        <svg
          className={`navBtn ${navOpen ? "active" : ""}`}
          onClick={toggleNav}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.620"
            d="M4 6h16M4 12h8m-8 6h16"
          ></path>
        </svg>
      </div>
    </header>
  );
}

export default Header;
