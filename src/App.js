import React, { useState } from "react";
import "./app.css";

import Header from "component/Header";

import Footer from "component/Footer";

import Portfolio from "component/Portfolio";

import Tech from "component/Tech";

import OtherSkills from "component/OtherSkills";

const App = () => {
  return (
    <div className="App">
      <div className="medium">
        <h1>Hi, welcome to my Portfolio!</h1>
      </div>

      <div className="medium">
        <Header></Header>
      </div>
      <div className="medium ">
        <Tech></Tech>
      </div>
      <div className="contrast">
        <Portfolio />
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

export default App;
