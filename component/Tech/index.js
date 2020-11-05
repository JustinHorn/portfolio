import React from "react";

import styles from "./tech.module.css";

const Tech = () => {
  const appDev = ["Java", "Kotlin", "Android Studio"];

  const desktopDevelopment = ["Java", "Python"];
  return (
    <div className={"gap-10 p20 " + styles.page}>
      <div className="basic-grid">
        <div className="flex">
          <DevCat
            title={"Frontend"}
            items={[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Apollo",
              "Next.js",
            ]}
          />
          <DevCat
            title={"Backend"}
            items={["Node.js", "Express", "REST", "GraphQL", "Prisma"]}
          />
        </div>
        <div className="flex">
          <DevCat
            title={"NoSQL"}
            items={["MongoDB", "Firebase/store"]}
          ></DevCat>
          <DevCat title={"SQL"} items={["SQLite", "PostgreSQL"]}></DevCat>
        </div>
      </div>

      <div className="flex">
        <DevCat title={"Android"} items={appDev}></DevCat>

        <DevCat title={"Windows"} items={desktopDevelopment}></DevCat>
      </div>
    </div>
  );
};

const DevCat = ({ title, items }) => (
  <div className={styles.devcat}>
    <h4>{title}</h4>
    <ul>
      {items.map((x, index) => (
        <li key={index}>{x}</li>
      ))}
    </ul>
  </div>
);

export default Tech;
