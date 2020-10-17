import React, { useState } from "react";
import "./app.css";

import Header from "component/Header";

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
    <div className="App">
      <div className="medium">
        <h1>Hi, welcome to my Website!</h1>
        <hr />
        <Header></Header>
        <hr />
        <nav>
          <NavLink activeClassName="activeLink" to="/portfolio">
            Portfolio
          </NavLink>

          <NavLink activeClassName="activeLink" to="/tech">
            Tech
          </NavLink>
        </nav>
      </div>

      <div className="contrast ">
        <Switch>
          <Route path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route path="/tech">
            <TechPage />
          </Route>
          <Route path="*">
            <Redirect to="/portfolio" />
          </Route>
        </Switch>
      </div>
      <div className="medium">
        <Footer />
      </div>
    </div>
  );
};

export default App;
