import React, { useState } from "react";

import styles from "./portfoliopage.module.css";

import data from "data";

import Project from "component/Project";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
} from "react-router-dom";

const PortfolioPage = () => {
  return (
    <div className={styles.page}>
      <hr className={styles.pageHr} />

      <Router basename="portfolio">
        <nav className={styles.subNav + " medium"}>
          <NavLink activeClassName="activeLink" to="/web">
            Web
          </NavLink>
          <NavLink activeClassName="activeLink" to="/android">
            Android
          </NavLink>
          <NavLink activeClassName="activeLink" to="/windows">
            Windows
          </NavLink>
        </nav>
        <div className={styles.portfolio + " contrast"}>
          <Switch>
            <Route path="/web">
              <Web />
            </Route>
            <Route path="/android">
              <div>
                <img src="" alt="" />
              </div>
            </Route>
            <Route path="/windows">windows</Route>
            <Route path="*">
              <Redirect to="/web"></Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

const Web = () => {
  const { webdev } = data;

  return (
    <div className={styles.web}>
      <Group headline={"Individual Projects"} projects={webdev.projects} />

      <Group headline={"Team Projects"} projects={webdev.groupProjects} />
    </div>
  );
};

const Group = ({ headline, projects }) => {
  return (
    <div className={"p-10"}>
      <h2>{headline}</h2>

      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
