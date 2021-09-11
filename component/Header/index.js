import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [height, setHeight] = useState(0);
  const heightRef = useRef();

  useEffect(() => {
    const { height } = heightRef.current.getBoundingClientRect();

    setHeight(height);
  }, []);

  return (
    <header style={{ height: `calc(100vh + ${height / 2}px)` }}>
      <div className="header-container">
        <div className="introduction">
          <div className="imageAndScore">
            <div className="img" />
            <div className="scores">
              <div className="score github">
                <a
                  href={"https://github.com/JustinHorn"}
                  title={"Github"}
                  className="social-icon"
                >
                  <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
                </a>
                <span>
                  7{" "}
                  <FontAwesomeIcon
                    className="small-icon star"
                    icon={["fas", "star"]}
                  />
                </span>
              </div>
              <div className="score stack-overflow">
                <a
                  href={
                    "https://stackoverflow.com/users/12753573/justin?tab=profile"
                  }
                  title={"Stackoverflow"}
                  className="social-icon"
                >
                  <FontAwesomeIcon
                    className="icon"
                    icon={["fab", "stack-overflow"]}
                  />
                </a>
                <span>100 - 10</span>
              </div>
            </div>
          </div>
          <div className="text">
            <h3 className="justin-headline">Justin Horn</h3>
            <h2 className="fullstack-headline ">Full Stack Developer</h2>
            <p>
              I just love cracking a tough challenge. My work is my life and
              doing a good job fills me with pride and joy.{" "}
            </p>
            <div className="socials">
              <a
                href={"https://www.linkedin.com/in/justin-christian-horn/"}
                title={"Linkedin"}
                className="social-icon"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a
                href={"mailto:hello@justinhorn.io"}
                title={"Email"}
                className="social-icon"
              >
                <FontAwesomeIcon icon={["fas", "envelope"]} />
              </a>
              <a
                href={"https://twitter.com/Horn00Justin"}
                title={"Twitter"}
                className="social-icon"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sky">
        <div className="stars"></div>
        <div className="stars1"></div>
        <div className="stars2"></div>
      </div>
      <img ref={heightRef} className="overlay" src="/img/icons/overlap.svg" />
    </header>
  );
};

export default Header;
