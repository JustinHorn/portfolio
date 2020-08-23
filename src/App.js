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
          <hr />

          <Portfolio></Portfolio>
        </div>
        <hr />
        <Footer></Footer>
      </main>
    </div>
  );
};

export default App;
