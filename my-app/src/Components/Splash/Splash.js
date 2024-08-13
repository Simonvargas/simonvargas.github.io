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
          <span onClick={scrollToAboutMe} class={styles.arrow}>
            &#8595;
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default Splash;
