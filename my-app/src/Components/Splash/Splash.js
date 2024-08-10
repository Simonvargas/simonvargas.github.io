import React, { useState, useEffect, useContext } from "react";
import "./Splash.css";
import { ScrollContext } from "../../Context/Context";
import { motion } from "framer-motion";

function Splash() {
  const { homeRef, aboutMeRef, setActiveLink } = useContext(ScrollContext);

  const scrollToAboutMe = () => {
    setActiveLink("aboutMe");
    if (aboutMeRef && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={homeRef}
      id="home"
      className="split-section"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
    <div ref={homeRef} id="home" className="split-section">
      <div className="split-section__content">
        <div className="split-section__text">
      <p>Hi, my name is <b>Simon.</b></p>
      </div>
      <img alt='profile of person' className="profilephoto" src={`${process.env.PUBLIC_URL}/images/menobg.png`}></img>      
      <div className="nameBox"><span className="firstName">Simon</span> <span className="lastName">Vargas</span></div>  

      </div>
        <div className="split-section__buttons">
        <p className="solutionsEngineer">Solutions Engineer</p>
          <a onClick={scrollToAboutMe} className="btn">Learn more</a>
     <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1j7f1ArS_JaqL84lDpetM_cpL792jFoym/edit"
          className="btn">
          Resume
        </a>
        </div>
        <div class="scroll-button">
  <span onClick={scrollToAboutMe} class="arrow">&#8595;</span>
</div>
       
        
      </div>
     </motion.div>
  );
}

export default Splash;
