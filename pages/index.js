import Head from "next/head";
import styles from "../styles/Home.module.css";

import Link from "next/Link";

import Profile from "component/Profile";

import LinkIcon from "component/Icon/LinkIcon";

import { footer } from "data";

export default function Home() {
  const { icons } = footer;

  return (
    <div className="contrast">
      <h1 className={styles.headline}>Hi, welcome to my Portfolio!</h1>
      <hr />

      <Profile />
    </div>
  );
}
