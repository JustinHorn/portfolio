import React from "react";

import PublicIcon from "component/Icon";

import styles from "./technologies.module.css";

import { technologies } from "data";

const Technologies = () => {
  const { icons } = technologies;
  return (
    <div>
      <h3>Technologies</h3>
      <div className={styles.technologies}>
        {Object.keys(icons).map((key, index) => (
          <div key={index} className={styles[key]}>
            <h4>{key}</h4>
            <TechIcons names={icons[key]} />
          </div>
        ))}
      </div>
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
