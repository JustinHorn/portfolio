import React from "react";

import styles from "./index.module.css";

export default () => {
  return (
    <div className={styles.portfolio}>
      <h3>Projects</h3>
      <div className={styles.projects}>
        <div className={styles.project}>
          <h4> Ultimate Tic Tac Toe</h4>
          <iframe
            title="ultimate-tic-tac-toe"
            src="https://justinhorn.github.io/ultimate-tic-tac-toe-react"
            frameBorder="0"
          />
        </div>
        <div className={styles.project}>
          <h4> Cookie Clicker</h4>
          <iframe
            title="cookie clicker"
            src="https://cookieclicker-justin.herokuapp.com/"
            frameBorder="0"
          />
        </div>
      </div>
    </div>
  );
};

export const UTTT = () => {
  return (
    <div className={styles.project}>
      <h4> Ultimate Tic Tac Toe</h4>
      <iframe
        title="ultimate-tic-tac-toe"
        src="https://justinhorn.github.io/ultimate-tic-tac-toe-react"
        frameBorder="0"
      />
    </div>
  );
};

export const CookieClicker = () => {
  return (
    <div className={styles.project}>
      <h4> Cookie Clicker</h4>
      <iframe
        title="cookie clicker"
        src="https://cookieclicker-justin.herokuapp.com/"
        frameBorder="0"
      />
    </div>
  );
};

export const WeWereHere = () => {
  return (
    <div className={styles.project}>
      <h4>We were here </h4>
      <iframe
        title="ultimate-tic-tac-toe"
        src="https://dayplanner.online:3050/"
        frameBorder="0"
      />
    </div>
  );
};
