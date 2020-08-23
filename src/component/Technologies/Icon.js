import React from "react";

import styles from "./Icon.module.css";

export default function PublicIcon(props) {
  return <Icon {...props} location={"/img/icons/" + props.fileName} />;
}

function Icon({ location, name }) {
  return (
    <div className={styles.iconLayout}>
      <div className={styles.iconWrapper}>
        <div
          className={styles.icon}
          style={{ backgroundImage: "url(" + location + ")" }}
        ></div>
      </div>
      <span>{name}</span>
    </div>
  );
}
