import React, { useState } from "react";
import "./app.css";

import Technologies from "component/Technologies";

import { Project } from "component/Portfolio/index";

import Slider from "react-slick";

import Header from "component/Header";

import Footer from "component/Footer";

import data from "data";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};
const App = () => {
  const [display, setDisplay] = useState("webdev");
  return (
    <div className="App">
      <main>
        <Header></Header>

        <nav>
          {["webdev", "further"].map((value, index) => (
            <button
              key={index}
              onClick={(e) => setDisplay(value)}
              style={{ color: display === value ? "#e67070" : "" }}
            >
              {value.toUpperCase()}
            </button>
          ))}
        </nav>
        <div className="body">{display === "webdev" && <WebDev />}</div>
        <hr />
        <Footer></Footer>
      </main>
    </div>
  );
};

const WebDev = () => (
  <>
    <Technologies />
    <hr />
    <div className="projects">
      <Projects
        className="pp"
        name="Personal Projects"
        data={data.portfolio.projects}
      />

      <Projects
        className="gp"
        name="Group Projects"
        data={data.portfolio.groupProjects}
      />
    </div>
  </>
);

const Projects = ({ name, data, className }) => {
  return (
    <div className={className}>
      <h2>{name}</h2>

      <Slider {...settings}>
        {data.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Slider>
    </div>
  );
};

export default App;
