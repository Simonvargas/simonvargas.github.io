import React, { useState, useEffect, useContext, useRef } from "react";
import { ScrollContext } from "../../Context/Context";
import styles from "./Introduction.module.css";
import {motion, useInView, useAnimation, useIsPresent } from "framer-motion"


function Introduction() {
  const { aboutMeRef } = useContext(ScrollContext);

  const ref = useRef(null)
  const isInView = useInView(ref, { threshold: 0.25, triggerOnce: true });
  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView])


  return (
    
    <section ref={aboutMeRef} class={styles.aboutMe} id="about-me">
      {/* <motion.div
      variants={{
        hidden: {opacity: 0, y:75},
        visible: {opacity: 1, y:0},
      }}
      initial="hidden"
      animate={mainControls}
      transition={{duration: 0.3, delay: .4}}
      > */}
      <div ref={ref}>
    
          
        <h2>Welcome to my Portfolio!</h2>
        <p>
          From a young age, computers have been an intrinsic part of my life.
          Technology has captivated my imagination. Growing up, I found myself
          constantly tinkering with gadgets, exploring computer programs, and
          embracing the endless possibilities that technology offered. It was
          during this time that I discovered my deep-rooted passion for
          leveraging technology to help others and make a positive impact.
        </p>
        <p>
          Today, as a Solutions Engineer, I have the incredible opportunity to
          combine my love for technology with my innate desire to assist and
          empower others. I thrive in this role, as it allows me to utilize my
          technical expertise to develop innovative solutions that address
          complex challenges and drive meaningful change for individuals and
          organizations.
        </p>
        <p>
          I'm thrilled to have you here, and I can't wait to share my work with
          you. Let's embark on this journey together!
        </p>
        </div>
        {/* </motion.div> */}
    </section>
  );
}

export default Introduction;
