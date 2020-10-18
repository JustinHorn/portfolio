import React from "react";

import styles from "./header.module.css";

import data from "data";

const Profile = () => {
  return (
    <header>
      <div className={styles.imgTitle}>
        <div className={styles.img} />
        <div className={styles.aside}>
          <h2>Justin Horn</h2>
          <span>Fullstack Developer</span>
        </div>
      </div>
      <div className={styles.aboutMe}>{data.header.aboutMe}</div>
    </header>
  );
};

export default Profile;
