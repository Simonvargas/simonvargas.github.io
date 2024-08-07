import React, { useState, useEffect } from "react";
import "./Header.css"

function Header() {
    return (
        <nav>
          <a class='links' href="#home">Welcome</a>
          <a class='links' href="#about-me">About Me</a>
          <a class='links' href="#projects">Projects</a>
          <a class='links' href="#technologies">Technologies</a>
          <a class='links' href="#contact">Get in touch</a>
        </nav>
    
    );
  }

  export default Header