import React, { useState, useEffect, useContext } from "react";
import styles from "./Splash.module.css";
import { ScrollContext } from "../../Context/Context";
import { motion } from "framer-motion";

function Splash() {
  const { homeRef, aboutMeRef, setActiveLink, contactRef } =
    useContext(ScrollContext);

  const scrollToAboutMe = () => {
    setActiveLink("aboutMe");
    if (aboutMeRef && aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    setActiveLink("contact");
    if (contactRef && contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={homeRef} id="home" className={styles.splitSection}>
      <div className={styles.splitSectionContent}>
        <div className={styles.splitSectionText}>
          <img
            alt="profile of person"
            className={styles.profilephoto}
            src={`${process.env.PUBLIC_URL}/images/menobg.png`}
          ></img>
          <b>Hey, I'm Simon.</b>
          <p className={styles.heading}> I'm a Web Developer/Solutions Engineer based in the US.</p>
          <p className={styles.subheading}>I'm always eager to connect with like-minded professionals, discuss industry trends, and explore potential collaborations. Let's connect and grow together!</p>
          <button className={styles.headingBtn}onClick={scrollToContact}>Contact</button>
        </div>

        <div className={styles.nameBox}>
          <span className={styles.firstName}>Simon</span>{" "}
          <span className={styles.lastName}>Vargas</span>
        </div>
      </div>
      <div className={styles.splitSectionButtons}>
        <p className={styles.solutionsEngineer}>Solutions Engineer</p>
      </div>
      <div class={styles.scrollButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          class={styles.arrow}
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          onClick={scrollToAboutMe}
        >
          <g fill="none" stroke="currentColor" stroke-linejoin="round">
            <path d="M6 9a6 6 0 0 1 12 0v6a6 6 0 0 1-12 0z"></path>
            <path stroke-linecap="round" d="M12 7v4"></path>
          </g>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          class={styles.arrow2}
          width="1em"
          height="1em"
          viewBox="0 0 256 256"
          onClick={scrollToAboutMe}
        >
          <path
            fill="currentColor"
            d="M210.83 133.17a4 4 0 0 1 0 5.66l-80 80a4 4 0 0 1-5.66 0l-80-80a4 4 0 0 1 5.66-5.66L128 210.34l77.17-77.17a4 4 0 0 1 5.66 0m-85.66 5.66a4 4 0 0 0 5.66 0l80-80a4 4 0 1 0-5.66-5.66L128 130.34L50.83 53.17a4 4 0 0 0-5.66 5.66Z"
          ></path>
        </svg>
        <span onClick={scrollToAboutMe} class={styles.arrow3}>
          &#8595;
        </span>
      </div>
    </div>
  );
}

export default Splash;
