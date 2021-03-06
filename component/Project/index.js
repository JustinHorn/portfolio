import React, { useState } from 'react';

import styles from './project.module.css';

import TechStack from 'component/TechStack';

import Image from 'next/image';

const Project = ({ project, imgClass }) => {
  const [op, setOp] = useState(false);

  let style = '';

  switch (project.type) {
    case 'web':
      style = styles.web;
      break;
    case 'android':
      style = styles.android;
      break;
    case 'windows':
      style = styles.windows;
      break;
    default:
      style = styles.web;
  }

  return (
    <div className={styles.project + ' ' + style}>
      <h5 className="hard">{project.name}</h5>
      <div className={'relative '}>
        <div className={styles.triggerHover + ' ' + (op ? styles.opac : '')}>
          <img
            className={styles.projectFrame}
            src={`/img/projects/${project.img}`}
          />
        </div>
        <div
          className={styles.projectDescription}
          onMouseEnter={() => setOp(true)}
          onMouseLeave={() => setOp(false)}
        >
          <TechStack className="flex-center" icons={project.tech} />

          <div className={styles.links}>
            {project.url && <a href={project.url}>DEMO</a>}
            {project.github && <a href={project.github}>CODE</a>}
          </div>
        </div>
      </div>

      <div className={styles.description}>{project.description}</div>
    </div>
  );
};

export default Project;
