import React from "react";

import PublicIcon from "./Icon";

import styles from "./Technologies.module.css";

const Technologies = () => {
  return (
    <div className={styles.technologies}>
      <div className={styles.MERN}>
        <h4>fav tech</h4>
        <DisplayIcons names={["MongoDB", "Express", "React", "NodeJs"]} />
      </div>
      <div className={styles.tools}>
        <h4>tools</h4>
        <DisplayIcons names={["Git", "Github", "VSCode"]} />
      </div>
      <div className={styles.other}>
        <h4> experience</h4>
        <DisplayIcons
          names={[
            "html5",
            "css3",
            "javascript",
            "java",
            "python",
            "kotlin",
            "android",
          ]}
        />
      </div>
    </div>
  );
};

export default Technologies;

const DisplayIcons = ({ names }) => {
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
