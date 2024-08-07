import React, { useState, useEffect } from "react";
import "./Technologies.css";

function Technologies() {
  return (
    
      <div id="technologies" class="technologies">
          <div class="content">
          <img
            class="photo-technologies"
            src="https://cdn.wallpapersafari.com/38/27/zYI4cy.jpg"
            alt="people walking on crosswalk"
            data-position="center center"
          />
         </div>

            <div class="inner">
              <h2 class="h2">Technologies</h2>
              <ul class="badges">
                <a
                  href="https://www.w3schools.com/css/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="css3"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a
                  href="https://www.docker.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                    alt="docker"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a
                  href="https://expressjs.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                    alt="express"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a
                  href="https://flask.palletsprojects.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
                    alt="flask"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a href="https://heroku.com" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
                    alt="heroku"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a
                  href="https://www.w3.org/html/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="html5"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a
                  href="https://www.mysql.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="mysql"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a
                  href="https://www.postgresql.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                    alt="postgresql"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a href="https://postman.com" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    alt="postman"
                    width="40"
                    height="40"
                  />
                </a>
                <a
                  href="https://www.python.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="python"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a href="https://redux.js.org" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                    alt="redux"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a
                  href="https://sequelize.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <img
                    src="https://www.vectorlogo.zone/logos/sequelizejs/sequelizejs-icon.svg"
                    alt="sequelize"
                    width="40"
                    height="40"
                  />{" "}
                </a>
                <a href="https://aws.amazon.com" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>
              </ul>
          </div>
      </div>
    
  );
}

export default Technologies;
