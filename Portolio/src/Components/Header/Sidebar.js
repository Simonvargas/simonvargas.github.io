import React, { useEffect, useState, useContext } from "react";
import styles from "./sidebar.module.css";
import { ScrollContext } from "../../Context/Context";


function Sidebar() {
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
        if (navOpen) {
          scrollToSection1(ref, section);
        } else {
          scrollToSection2(ref, section);
        }
      };
    
      // Function for smooth scrolling when nav is open
      const scrollToSection1 = (ref, section) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
        closeNav();
      };
    
      // Function for smooth scrolling when nav is closed
      const scrollToSection2 = (ref, section) => {
        ref.current.scrollIntoView({ behavior: "smooth" });
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
        }, 300); 
      };
    
      const toggleNav = () => {
        if (navOpen) {
          closeNav();
        } else {
          openNav();
        }
      };

    return (
    <div className={styles.sidebar1}>
      <a
        className={`${styles.links} ${activeLink === "home" ? styles.active : ""}`}
        onClick={() => scrollToSection(homeRef, "home")}
      >
        Home
      </a>
      <a
        className={`${styles.links} ${activeLink === "aboutMe" ? styles.active : ""}`}
        onClick={() => scrollToSection(aboutMeRef, "aboutMe")}
      >
        About
      </a>
      <a
        className={`${styles.links} ${activeLink === "projects" ? styles.active : ""}`}
        onClick={() => scrollToSection(projectsRef, "projects")}
      >
        Projects
      </a>
      <a
        className={`${styles.links} ${activeLink === "technologies" ? styles.active : ""}`}
        onClick={() => scrollToSection(technologiesRef, "technologies")}
      >
        Technologies
      </a>
      <a
        className={`${styles.links}  ${activeLink === "contact" ? styles.active : ""}`}
        onClick={() => scrollToSection(contactRef, "contact")}
      >
        Contact
      </a>
      {/* <a
        target="_blank"
        rel="noreferrer"
        href="https://docs.google.com/document/d/1j7f1ArS_JaqL84lDpetM_cpL792jFoym/edit"
        className={styles.links}
      >
        Resume
      </a> */}
    </div>
    )
}

export default Sidebar;
