import React, { useState } from "react";

import styles from "./project.module.css";

import { LinkIcon } from "component/Icon";

const Project = (project) => {
  return (
    <div className={styles.project}>
      <iframe
        className={styles.projectFrame}
        title={project.name}
        scrolling="no"
        src={project.url}
        frameBorder="0"
      ></iframe>
      <div className={styles.projectDescription}>
        <h4> {project.name}</h4>

        <div className={styles.links}>
          <LinkIcon
            title="Deployed Version"
            className={"smallIcon rotate"}
            src="/img/icons/web.png"
            href={project.url}
          />
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
