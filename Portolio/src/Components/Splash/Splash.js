import React, { useState, useEffect, useContext } from "react";
import styles from "./Splash.module.css";
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
      className={styles.splitSection}
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div ref={homeRef} id="home" className={styles.splitSection}>
        <div className={styles.topColorBar}></div>
        <div className={styles.splitSectionContent}>
          <div className={styles.splitSectionText}>
            <p>
              Hi, my name is <b>Simon.</b>
            </p>
          </div>
          <img
            alt="profile of person"
            className={styles.profilephoto}
            src={`${process.env.PUBLIC_URL}/images/menobg.png`}
          ></img>
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
    </motion.div>
  );
}

export default Splash;
