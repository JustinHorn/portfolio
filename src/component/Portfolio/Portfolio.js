import React, { useState } from "react";

import styles from "./portfolio.module.css";

import data from "data";

import Project from "component/Project";

const Portfolio = () => {
  const { webdev } = data;

  return (
    <div className={styles.portfolio}>
      <Group headline={"Individual Projects"} projects={webdev.projects} />

      <Group headline={"Team Projects"} projects={webdev.groupProjects} />
    </div>
  );
};

const Group = ({ headline, projects }) => {
  return (
    <div className={"p-10"}>
      <h2>{headline}</h2>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
