import React, { useState } from "react";

import styles from "./portfolio.module.css";

import data from "data";

import { LinkIcon } from "component/Icon";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

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

export const Project = (project) => {
  return (
    <div className={styles.project}>
      <h4> {project.name}</h4>
      <iframe title={project.name} src={project.url} frameBorder="0" />
      <div className={styles.links}>
        <a href={project.url}>
          <LinkIcon
            className={styles.icon}
            src="/img/icons/web.svg"
            href={project.url}
          />
        </a>
        <a href={project.github} className="rotate">
          <LinkIcon
            className={styles.icon}
            src="/img/icons/github.png"
            href={project.github}
          />
        </a>
      </div>
    </div>
  );
};
