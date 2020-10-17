import React, { useState } from "react";

import styles from "./project.module.css";

import LinkIcon from "component/Icon/LinkIcon";

import TechStack from "component/TechStack";

const Project = (project) => {
  const [op, setOp] = useState(false);
  return (
    <div className={styles.project}>
      <div>
        <div
          className={styles.projectFrame + " " + (op ? styles.opac : "")}
          style={{ backgroundImage: `url('/img/websites/${project.img}')` }}
        ></div>
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
      <h5>{project.date}</h5>
    </div>
  );
};

export default Project;
