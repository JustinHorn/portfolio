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
          <p>Fullstack Developer</p>
        </div>
      </div>
      <hr />
      <div className={styles.aboutMe}>
        <p>{data.header.aboutMe}</p>
      </div>
    </header>
  );
};

export default Header;
