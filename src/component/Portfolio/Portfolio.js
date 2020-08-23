import React, { useState } from "react";

import styles from "./portfolio.module.css";

import data from "data";

import Slider from "react-slick";

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

const Portfolio = () => {
  const [display, setDisplay] = useState("personal");
  const { webdev } = data;

  return (
    <>
      <h2>Projects</h2>
      <Nav
        className={styles.nav}
        options={["personal", "group", "both"]}
        display={display}
        setDisplay={setDisplay}
      />

      <div className={styles.projects + " " + styles[display]}>
        {["personal", "both"].includes(display) && (
          <Projects className="pp" name="Personal" data={webdev.projects} />
        )}
        {["group", "both"].includes(display) && (
          <Projects className="gp" name="Group" data={webdev.groupProjects} />
        )}
      </div>
    </>
  );
};

export default Portfolio;

const Nav = ({ options, display, setDisplay, className }) => {
  return (
    <nav className={className}>
      {options.map((value, index) => (
        <button
          key={index}
          onClick={(e) => setDisplay(value)}
          style={{ color: display === value ? "black" : "" }}
        >
          {value.toUpperCase()}
        </button>
      ))}
    </nav>
  );
};

const Projects = ({ name, data, className }) => {
  return (
    <div className={className}>
      <Slider {...settings}>
        {data.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </Slider>
    </div>
  );
};

export const Project = (project) => {
  return (
    <div className={styles.project}>
      <h4> {project.name}</h4>
      <iframe title={project.name} src={project.url} frameBorder="0" />
      <br />
      <a href={project.url}>
        <button>Visit</button>
      </a>
    </div>
  );
};
