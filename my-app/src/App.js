import React, { useState, useEffect } from "react";
import Headroom from 'react-headroom'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Headroom><Header/></Headroom>
      <Introduction />
      <AboutMe />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>My Portfolio</h1>
      <nav>
        <a href="#introduction">Introduction</a>
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#hobbies">Hobbies</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function Introduction() {
  return (
    <section id="introduction">
      <h2>Introduction</h2>
      <p>
        Welcome to my portfolio! Here you'll find information about me and my
        work.
      </p>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="about-me">
      <h2>About Me</h2>
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

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        <li>Project 1: A cool web app</li>
        <li>Project 2: Another cool project</li>
        <li>Project 3: Yet another cool project</li>
      </ul>
    </section>
  );
}

function Hobbies() {
  return (
    <section id="hobbies">
      <h2>Hobbies</h2>
      <p>I enjoy hiking, photography, and playing the guitar.</p>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Get in touch</h2>

      <p>
        Feel free to contact me if you have any questions about my experience or
        are looking to collaborate.
      </p>

      <h3>Email</h3>
      <p>simonvargas01@gmail.com</p>

      <h3>Phone</h3>
      <span>786.985.5045</span>

      <h3>Location</h3>
      <p>New York, NY</p>

      <h3>Social</h3>
      <ul class="icons">
        <li>
          <a
            href="https://github.com/simonvargas"
            target="_blank"
            rel="noreferrer"
            class="icon brands fa-github fa-2x"
          >
            <span class="label">GitHub</span>
          </a>
        </li>

        <li>
          <a
            href="https://www.linkedin.com/in/simonvargas01/"
            target="_blank"
            rel="noreferrer"
            class="icon brands fa-linkedin-in fa-2x"
          >
            <span class="label">LinkedIn</span>
          </a>
        </li>
      </ul>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My Portfolio. All rights reserved.</p>
      <p>
        Follow me on <a href="https://twitter.com/">Twitter</a>,{" "}
        <a href="https://linkedin.com/">LinkedIn</a>, and{" "}
        <a href="https://github.com/">GitHub</a>.
      </p>
    </footer>
  );
}

export default App;
