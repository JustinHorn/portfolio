import React from "react";

import styles from "./header.module.css";

const Header = () => {
  return (
    <header>
      <div className={styles.img}></div>
      <aside>
        <h3> Justin Horn</h3>
        <p>Fullstack Developer</p>
      </aside>
    </header>
  );
};

export default Header;
