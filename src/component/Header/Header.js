import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.imgTitle}>
        <div className={styles.img}></div>
        <aside>
          <h3>Justin Horn</h3>
          <p>Fullstack Developer</p>
        </aside>
      </div>
      <hr />
      <div className={styles.aboutMe}>
        <p>
          Hi! Problem solving is my life. Programming is my tool. <br />
          Out of interest I have developed for Desktop, Mobile and lately the
          Web. Now I want to make it my profession and solve your problems!
        </p>
      </div>
    </header>
  );
};

export default Header;
