import React from "react";
import styles from "styles/portfoliopage.module.css";

import Project from "component/Project";

const Group = ({ headline, projects, imgClass }) => {
  return (
    <div className={"p-10 " + styles.groups}>
      <h2>{headline}</h2>

      <div className={styles.groupList}>
        {projects.map((project, index) => (
          <Project key={index} project={project} imgClass={imgClass} />
        ))}
      </div>
    </div>
  );
};

export default Group;
