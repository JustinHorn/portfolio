import React from "react";
import styles from "styles/portfoliopage.module.css";
import Group from "component/Group";

import data from "data";

const Web = () => {
  const { webdev } = data;
  return (
    <div className={styles.web}>
      <Group headline={"Individual Projects"} projects={webdev.projects} />

      <Group headline={"Team Projects"} projects={webdev.groupProjects} />
    </div>
  );
};

export default Web;
