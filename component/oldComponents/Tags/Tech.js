import React from "react";

import styles from "./tag.module.css";
import Icon from "component/Icon";

const Tag = ({ iconVal }) => (
  <li className={styles.tag} title={iconVal?.name}>
    <Icon {...iconVal} className="smallIcon" />
  </li>
);

export default Tag;
