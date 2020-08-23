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
        <Footer></Footer>
      </main>
    </div>
  );
};

export default App;
