import React from "react";

const Tech = () => {
  const appDev = ["Java", "Kotlin", "Android Studio"];

  const desktopDevelopment = ["Java", "Python"];
  return (
    <div className="gap-10">
      <h2>Tech</h2>
      <div className="basic-grid">
        <div className="flex">
          <DevCat
            title={"Frontend"}
            items={["HTML5", "CSS3", "JavaScript", "React.js", "Apollo"]}
          />
          <DevCat
            title={"Backend"}
            items={["Node.js", "Express", "Rest", "GraphQL", "Prisma"]}
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
        <DevCat title={"App"} items={appDev}></DevCat>

        <DevCat title={"Windows"} items={desktopDevelopment}></DevCat>
      </div>
    </div>
  );
};

const DevCat = ({ title, items }) => (
  <div>
    <h4>{title}</h4>
    <ul>
      {items.map((x, index) => (
        <li key={index}>{x}</li>
      ))}
    </ul>
  </div>
);

export default Tech;
