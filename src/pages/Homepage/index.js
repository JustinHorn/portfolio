import React from "react";
import Profile from "component/Profile";

import styles from "./homepage.module.css";

const HomePage = () => {
  return (
    <div className="contrast">
      <h1 className={styles.headline}>Hi, welcome to my Portfolio!</h1>
      <hr />

      <Profile />
    </div>
  );
};

export default HomePage;
