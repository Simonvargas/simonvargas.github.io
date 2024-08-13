import React, {  useContext } from "react";
import "./Technologies.css";
import { ScrollContext } from  "../../Context/Context";

function Technologies() {
  const { technologiesRef} = useContext(ScrollContext);

  return (
    
      <div ref={technologiesRef}id="technologies" class="technologies">
          <div class="content">
          <img
            class="photo-technologies"
            src="https://cdn.wallpapersafari.com/38/27/zYI4cy.jpg"
            alt="people walking on crosswalk"
            data-position="center center"
          />
         </div>

            <div class="inner">
              <h1 class="h2">Technologies</h1>
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
                <a href="https://github.com" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/github/github-original.svg"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://jira.com" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/jira/jira-original.svg"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://salesforce.com" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/salesforce/salesforce-original.svg"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://drive.com" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/googlecloud/googlecloud-original.svg"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>
                <a href="https://snowflake.com" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://avatars.githubusercontent.com/u/6453780?s=200&v=4"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>

                <a href="https://www.linux.com/what-is-linux/" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://www.svgrepo.com/show/3968/linux.svg"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>

                <a href="https://www.atlassian.com/software/confluence" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/confluence/confluence-original.svg"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>

                <a href="https://www.microsoft.com/en-us/microsoft-365/excel" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://img.icons8.com/?size=100&id=117561&format=png&color=000000"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>

                <a href="https://cloud.google.com/looker?hl=en" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://img.icons8.com/?size=100&id=SruJhzn0nnLl&format=png&color=000000"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>

                <a href="https://app.powerbi.com/singleSignOn?ru=https%3A%2F%2Fapp.powerbi.com%2F%3FnoSignUpCheck%3D1" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://img.icons8.com/?size=100&id=3sGOUDo9nJ4k&format=png&color=000000"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>

                <a href="https://www.databricks.com/" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://avatars.githubusercontent.com/u/4998052?s=200&v=4"
                    alt="aws"
                    width="40"
                    height="40"
                  />
                </a>

                <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                  {" "}
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/vscode/vscode-original.svg"
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
