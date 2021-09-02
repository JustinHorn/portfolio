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
                <FontAwesomeIcon className="icon" icon={["fab", "github"]} />
                <span>
                  7{" "}
                  <FontAwesomeIcon
                    className="small-icon star"
                    icon={["fas", "star"]}
                  />
                </span>
              </div>
              <div className="score stack-overflow">
                <FontAwesomeIcon
                  className="icon"
                  icon={["fab", "stack-overflow"]}
                />
                <span>100 - 10</span>
              </div>
            </div>
          </div>
          <div className="text">
            <h2 className="justin-headline">Justin Horn</h2>
            <h1 className="fullstack-headline ">Full Stack Developer</h1>
            <p>
              I just love cracking a tough challenge. My work is my life and
              doing a good job fills me with pride and joy.{" "}
            </p>
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
