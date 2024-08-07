import React, { useState, useEffect, useContext } from "react";
import "./Splash.css"
import { ScrollContext } from  "../../Context";


function Splash() {
  const { homeRef} = useContext(ScrollContext);

    return (
      <div ref={homeRef} id="home" className="split-section">
        <div className="split-section__text">
          <h1>Simon Vargas</h1>
          <p>
          Solutions Engineer
          </p>
        </div>
        <div className="split-section__image">
          <img src="images/computer-guy.png" alt="Description" />
        </div>
      </div>
    );
  }

  export default Splash; 