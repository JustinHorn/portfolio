import React, { useState } from "react";
import "./app.css";

import HomePage from "pages/Homepage";

import TechPage from "pages/Tech";
import PortfolioPage from "pages/Portfolio";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
} from "react-router-dom";

import { footer } from "data";
import LinkIcon from "component/Icon/LinkIcon";

const { icons } = footer;

const App = () => {
  const location = useLocation();
  return (
    <div className="contrast full-height">
      <div className="App">
        <div className="medium">
          <nav className="space-between">
            <div className="links">
              <NavLink exact activeClassName="activeLink" to="/">
                Welcome
              </NavLink>
              <NavLink activeClassName="activeLink" to="/portfolio">
                Portfolio
              </NavLink>

              <NavLink activeClassName="activeLink" to="/tech">
                Tech
              </NavLink>
            </div>
            <div className="social">
              {icons.map((icon, index) => (
                <LinkIcon key={index} {...icon} />
              ))}
            </div>
          </nav>
        </div>
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 300 }}
            classNames={"fade"}
          >
            <Switch>
              <Route path="/portfolio">
                <PortfolioPage />
              </Route>
              <Route path="/tech">
                <TechPage />
              </Route>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route path="*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default App;
