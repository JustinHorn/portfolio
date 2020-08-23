import React, { Component } from "react";
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
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Header></Header>
          <div className="body">
            <Technologies />
            <hr />
            <Projects name="Personal Projects" data={data.portfolio.projects} />
            <br />
            <hr />
            <br />
            <Projects
              name="Group Projects"
              data={data.portfolio.groupProjects}
            />
          </div>
          <hr />
          <Footer></Footer>
        </main>
      </div>
    );
  }
}

const Projects = ({ name, data }) => {
  return (
    <div>
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
