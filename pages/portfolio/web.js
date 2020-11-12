import React from "react";
import styles from "styles/portfoliopage.module.css";
import Group from "component/Group";

import data from "data";

const Web = () => {
  const { webdev } = data;
  return (
    <div className={""}>
      <Group headline={""} projects={webdev.projects} groupClass={styles.web} />
    </div>
  );
};

export default Web;
