import React, { useState } from "react";

import styles from "./project.module.css";

import { LinkIcon } from "component/Icon";

const Project = (project) => {
  const [op, setOp] = useState(false);
  return (
    <div className={styles.project}>
      <iframe
        className={styles.projectFrame + " " + (op && styles.opac)}
        title={project.name}
        scrolling="no"
        src={project.url}
        frameBorder="0"
      />
      <div
        className={styles.projectDescription}
        onMouseEnter={() => setOp(true)}
        onMouseLeave={() => setOp(false)}
      >
        <h4>
          <a href={project.url}> {project.name} </a>
        </h4>

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
  );
};

export default Project;
