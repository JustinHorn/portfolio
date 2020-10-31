import Profile from "component/Profile";

import { footer } from "data";

import styles from "styles/home.module.css";

export default function Welcome() {
  const { icons } = footer;

  return (
    <div className={"contrast " + styles.page}>
      <h1 className={styles.headline}>Hi, welcome to my Portfolio!</h1>
      <hr />
      <Profile />
    </div>
  );
}
