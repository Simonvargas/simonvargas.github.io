import React, { useState, useEffect, useContext } from "react";
import { ScrollContext } from "../../Context/Context";
import styles from "./newProject.module.css";


const New = () => {
    const { projectsRef } = useContext(ScrollContext);
  return (
    <div className={styles.projectContent}>
        hello
</div>
  );
};

export default New;