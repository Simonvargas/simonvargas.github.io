import React, { useEffect, useState, useContext } from "react";
import styles from "./sidebar.module.css";
import { ScrollContext } from "../../Context/Context";
import { motion } from 'framer-motion';



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


      const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.2,
            type: "spring",
            stiffness: 300,
            damping: 20,
          },
        }),
      };

      const links = [
        { label: "Home", ref: homeRef, section: "home" },
        { label: "About", ref: aboutMeRef, section: "aboutMe" },
        { label: "Projects", ref: projectsRef, section: "projects" },
        { label: "Technologies", ref: technologiesRef, section: "technologies" },
        { label: "Contact", ref: contactRef, section: "contact" },
      ];

      return (
        <div className={styles.sidebar1}>
          {links.map((link, index) => (
            <motion.a
              key={link.section}
              className={`${styles.links} ${
                activeLink === link.section ? styles.active : ""
              }`}
              onClick={() => scrollToSection(link.ref, link.section)}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      );
    }

export default Sidebar;