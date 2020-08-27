import React, { useState } from "react";
import "./app.css";

import Technologies from "component/Technologies";

import Header from "component/Header";

import Footer from "component/Footer";

import Portfolio from "component/Portfolio";

const App = () => {
  return (
    <div className="App">
      <main>
        <Header></Header>

        <div className="body">
          <Technologies />
          <div className="portfolio">
            <hr />

            <Portfolio></Portfolio>
            <br />
            <br />
          </div>
        </div>
        <div className="otherSkills">
          <p>
            Checkout my older Projects here
            <a href="https://justinhorn.github.io/otherProjects">
              <button>Other</button>
            </a>
            <br />
            Through them I have learnt Java, Python, Kotlin and developed for
            Windows, Android and Wear OS by Google.
          </p>
        </div>
        <hr />
        <Footer></Footer>
      </main>
    </div>
  );
};

export default App;
