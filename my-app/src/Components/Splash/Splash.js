import React, { useState, useEffect, useContext } from "react";
import "./Splash.css";
import { ScrollContext } from "../../Context";

function Splash() {
  const { homeRef, aboutMeRef, setActiveLink } = useContext(ScrollContext);

  const scrollToAboutMe = () => {
    setActiveLink("aboutMe");
    if (aboutMeRef && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={homeRef} id="home" className="split-section">
      <div className="split-section__text">
      <img alt='profile photo' className="profilephoto" src={`${process.env.PUBLIC_URL}/images/menobg.png`}></img>        <h1>Simon Vargas</h1>
        <p>Solutions Engineer</p>
        <div className="split-section__buttons">
          <a onClick={scrollToAboutMe} className="btn">Learn more</a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://docs.google.com/document/d/1j7f1ArS_JaqL84lDpetM_cpL792jFoym/edit"
          className="btn">
          Resume
        </a>
        </div>
      </div>
     
    </div>
  );
}

export default Splash;
