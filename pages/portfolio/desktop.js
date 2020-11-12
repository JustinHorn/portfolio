import React from "react";
import data from "data";
import Group from "component/Group";
import styles from "styles/portfoliopage.module.css";

const Windows = () => {
  const { desktop } = data;

  return (
    <div className={""}>
      <Group headline={""} projects={desktop} groupClass={styles.desktop} />
    </div>
  );
};

export default Windows;
