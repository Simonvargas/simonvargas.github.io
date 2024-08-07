import React, { useState, useEffect } from "react";
import "./Splash.css"

function Splash() {
    return (
      <div id="home" className="split-section">
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