import React from "react";

import PublicIcon from "component/Icon";

import styles from "./technologies.module.css";

import { technologies } from "data";

const Technologies = () => {
  const { icons } = technologies;
  return (
    <div className={styles.technologies}>
      <h2>Technologies</h2>

      {Object.keys(icons).map((key, index) => (
        <>
          <h4>{key[0].toUpperCase() + key.slice(1)}</h4>
          <TechIcons names={icons[key]} />
        </>
      ))}
    </div>
  );
};

export default Technologies;

const TechIcons = ({ names }) => {
  return (
    <div className={styles.icons}>
      {names.map((v, i) => (
        <div key={i} className={styles.iconSpacing}>
          <PublicIcon fileName={v.toLowerCase() + ".png"} name={v} />
        </div>
      ))}
    </div>
  );
};
