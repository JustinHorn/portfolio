import React, { useState } from "react";

import styles from "./project.module.css";

import LinkIcon from "component/Icon/LinkIcon";

import TechStack from "component/TechStack";

const Project = ({ project, imgClass }) => {
  const [op, setOp] = useState(false);

  let style = "";

  switch (project.type) {
    case "web":
      style = styles.web;
      break;
    case "android":
      style = styles.android;
      break;
    case "windows":
      style = styles.windows;
      break;
    default:
      style = styles.web;
  }

  return (
    <div className={styles.project + " " + style}>
      <h5> {project.date}</h5>

      <div className={"relative "}>
        <img
          className={styles.projectFrame + " " + (op ? styles.opac : "")}
          src={`/img/projects/${project.img}`}
        />
        <div
          className={styles.projectDescription}
          onMouseEnter={() => setOp(true)}
          onMouseLeave={() => setOp(false)}
        >
          <h4>
            <a href={project.url}> {project.name} </a>
          </h4>
          <TechStack icons={project.tech}></TechStack>

          <div className={styles.links}>
            <LinkIcon
              title="Github Repository"
              className={" rotate"}
              src="/img/icons/github.png"
              href={project.github}
            />
          </div>
        </div>
      </div>

      <div className={styles.description}>{project.description}</div>
    </div>
  );
};

export default Project;
