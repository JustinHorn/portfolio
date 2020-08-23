import React, { Component } from "react";
import "./app.css";

import Technologies from "component/Technologies";

import { UTTT, CookieClicker, WeWereHere } from "component/Portfolio/index";

import Slider from "react-slick";

import Header from "con";

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
            <Slider {...settings}>
              <div>
                <UTTT />
              </div>
              <div>
                <CookieClicker />
              </div>
              <div>
                <WeWereHere />
              </div>
            </Slider>
          </div>

          <hr />
          <footer>
            <div className="social">
              <Icon
                src="/img/icons/linkedin.png"
                href="https://www.linkedin.com/in/justin-horn-b9a18a1a3/"
              />

              <Icon
                src="/img/icons/github.png"
                href="https://github.com/JustinHorn"
              />
            </div>
            <p>ju-horn@web.de</p>
          </footer>
        </main>
      </div>
    );
  }
}

function Icon({ src, href }) {
  return (
    <a href={href}>
      <div
        className={"icon"}
        style={{ backgroundImage: "url(" + src + ")" }}
      ></div>
    </a>
  );
}

export default App;
