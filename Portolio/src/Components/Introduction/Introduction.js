import React, { useState, useEffect, useContext } from "react";
import { ScrollContext } from  "../../Context/Context";
import styles from "./Introduction.module.css"

function Introduction() {
  const { aboutMeRef } = useContext(ScrollContext);

    return (
        <section ref={aboutMeRef} class={styles.aboutMe} id="about-me">
      <h2>Welcome to my Portfolio!</h2>
      <p>
        From a young age, computers have been an intrinsic part of my life.
        Technology has captivated my imagination. Growing up, I found myself
        constantly tinkering with gadgets, exploring computer programs, and
        embracing the endless possibilities that technology offered. It was
        during this time that I discovered my deep-rooted passion for leveraging
        technology to help others and make a positive impact.
      </p>
      <p>
        Today, as a Solutions Engineer, I have the incredible opportunity to
        combine my love for technology with my innate desire to assist and
        empower others. I thrive in this role, as it allows me to utilize my
        technical expertise to develop innovative solutions that address complex
        challenges and drive meaningful change for individuals and
        organizations.
      </p>
      <p>
        I'm thrilled to have you here, and I can't wait to share my work with
        you. Let's embark on this journey together!
      </p>
    </section>
    );
  }

  export default Introduction