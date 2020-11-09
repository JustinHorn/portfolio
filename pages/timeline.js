import React from "react";

import styles from "styles/timeline.module.css";

import { timeline } from "data";
import TechStack from "component/TechStack";

const TimeLine = () => {
  return (
    <div className={styles.root}>
      <ul className={styles.timeline}>
        <li className={styles.container}>
          <div className={styles.timelineContent}>
            <h2 className={styles.date}> since November 2020</h2>
            <h1>Coding and Applying</h1>
          </div>
        </li>
        {timeline.map((d, index) => (
          <li key={index} className={styles.container}>
            <div className={styles.timelineContent}>
              <h2 className={styles.date}> {d.date}</h2>
              <h1>{d.heading}</h1>
              <p>{d.p}</p>
              <br />
              <h4 className={styles.subheadline}>Tech since then:</h4>
              <TechStack className={styles.teckstack} icons={d.tech} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeLine;
