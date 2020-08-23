import React from "react";

import styles from "./portfolio.module.css";

export const Project = (project) => {
  return (
    <div className={styles.project}>
      <h4> {project.name}</h4>
      <iframe title={project.name} src={project.url} frameBorder="0" />
    </div>
  );
};
