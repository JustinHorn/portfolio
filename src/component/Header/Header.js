import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.imgTitle}>
        <div className={styles.img}></div>
        <div className={styles.aside}>
          <h1>Justin Horn</h1>
          <span>Fullstack Developer</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
