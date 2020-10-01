import React from "react";

import styles from "./header.module.css";

import data from "data";

const Header = () => {
  return (
    <header>
      <div className={styles.imgTitle}>
        <div className={styles.img}></div>
        <div className={styles.aside}>
          <h3>Justin Horn</h3>
          <span>Fullstack Developer</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
