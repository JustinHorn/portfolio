import React, { useState } from "react";
import "./app.css";

import Technologies from "component/Technologies";

import Header from "component/Header";

import Footer from "component/Footer";

import Portfolio from "component/Portfolio";

const App = () => {
  return (
    <div className="App">
      <div className="medium">
        <Header></Header>
      </div>

      <div className="contrast">
        <Portfolio></Portfolio>
      </div>
      <div className="medium">
        <OtherSkills />
      </div>
      <div className="medium">
        <Footer />
      </div>
    </div>
  );
};

const OtherSkills = () => (
  <div className="otherSkills">
    Checkout my older Projects here
    <a href="https://justinhorn.github.io/otherProjects">
      <button className="button">Other</button>
    </a>
    <br />
    Through them I have learnt Java, Python, Kotlin and developed for Windows,
    Android and Wear OS by Google.
  </div>
);

export default App;
