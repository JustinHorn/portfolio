import React, { useState } from "react";
import "./app.css";

import HomePage from "pages/Homepage";
import Footer from "component/Footer";

import TechPage from "pages/Tech";
import PortfolioPage from "pages/Portfolio";

import {
  Switch,
  Route,
  NavLink,
  Redirect,
  useLocation,
} from "react-router-dom";

const App = () => {
  const location = useLocation();
  return (
    <div className="medium full-height">
      <div className="App">
        <div className="medium">
          <nav>
            <NavLink exact activeClassName="activeLink" to="/">
              Welcome
            </NavLink>
            <NavLink activeClassName="activeLink" to="/portfolio">
              Portfolio
            </NavLink>

            <NavLink activeClassName="activeLink" to="/tech">
              Tech
            </NavLink>
          </nav>
        </div>

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
        <div className="medium">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
