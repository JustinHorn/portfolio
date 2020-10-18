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

import { TransitionGroup, CSSTransition } from "react-transition-group";

const PortfolioPage = () => {
  const location = useLocation();
  return (
    <div className={styles.page}>
      <Router basename="portfolio">
        <nav className={styles.subNav + " medium"}>
          <NavLink activeClassName={styles.activeLink} to="/web">
            Web
          </NavLink>
          <NavLink activeClassName={styles.activeLink} to="/android">
            Android
          </NavLink>
          <NavLink activeClassName={styles.activeLink} to="/windows">
            Windows
          </NavLink>
        </nav>
        <div className={styles.portfolio + " contrast"}>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={{ enter: 300, exit: 300 }}
              classNames={"fade"}
            >
              <Switch>
                <Route path="/web">
                  <Web />
                </Route>
                <Route path="/android">
                  <Android />
                </Route>
                <Route path="/windows">
                  <Windows />
                </Route>
                <Route path="*">
                  <Redirect to="/web"></Redirect>
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
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

const Android = () => {
  const { android } = data;

  return (
    <div className={"flex-center"}>
      <Group headline={""} projects={android} />
    </div>
  );
};

const Windows = () => {
  const { windows } = data;

  return (
    <div className={"flex-center"}>
      <Group headline={""} projects={windows} />
    </div>
  );
};

const Group = ({ headline, projects, imgClass }) => {
  return (
    <div className={"p-10 " + styles.groups}>
      <h2>{headline}</h2>

      <div className={styles.groupList}>
        {projects.map((project, index) => (
          <Project key={index} project={project} imgClass={imgClass} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
