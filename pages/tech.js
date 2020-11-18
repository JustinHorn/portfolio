import React from "react";

import Tech from "component/Tech";

import styles from "styles/techpage.module.css";

const TechPage = () => {
  return (
    <main className={"contrast " + styles.page}>
      <section>
        <div className={styles.block}>
          <h5>Frontend</h5>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Bootstrap</li>

            <li>JavaScript</li>
            <li>React.js</li>
            <li>Apollo</li>
          </ul>
        </div>
        <div className={styles.block}>
          <h5>Jamstack</h5>
          <ul>
            <li>Next.js</li>
            <li>Firebase</li>
          </ul>
        </div>
        <div className={styles.block}>
          <h5>API</h5>
          <ul>
            <li>REST</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </section>
      <section>
        <div className={styles.block}>
          <h5>Backend</h5>
          <ul>
            <li>Node.js</li>
            <li>Java</li>
            <li>Python</li>
            <li>Kotlin</li>
          </ul>
        </div>

        <div className={styles.block}>
          <h5>ORM</h5>
          <ul>
            <li>Prisma</li>
            <li>Mongoose</li>
            <li>Sequelize</li>
          </ul>
        </div>
        <div className={styles.block}>
          <h5>Database</h5>

          <ul>
            <li>SQL</li>
            <li>MongoDB</li>
            <li>Firestore</li>
          </ul>
        </div>
      </section>
      <section>
        <div className={styles.block}>
          <h5>Platform</h5>

          <ul>
            <li>Web</li>
            <li>Desktop</li>
            <li>Android</li>
          </ul>
        </div>
      </section>
      <footer></footer>
    </main>
  );
};

export default TechPage;

`
Frontend
HTML5
CSS3
JavaScript
React.js
Apollo
Next.js
Backend
Node.js
Express
REST
GraphQL
Prisma
Java
Python
NoSQL
MongoDB
Firebase/store
SQL
SQLite
PostgreSQL
Android
Java
Kotlin
Android Studio
Windows
Java
Python
`;
