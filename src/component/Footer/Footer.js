import React from "react";

import LinkIcon from "component/Icon/LinkIcon";
import { footer } from "data";

import styles from "./footer.module.css";

const { icons } = footer;
const Footer = () => {
  return (
    <footer>
      <div className={styles.social}>
        {icons.map((icon, index) => (
          <LinkIcon key={index} className={styles.icon} {...icon} />
        ))}
      </div>
      <div className={styles.p}>ju-horn@web.de</div>
    </footer>
  );
};

export default Footer;
