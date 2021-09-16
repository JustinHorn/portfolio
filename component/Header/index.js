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
        <div className="center">
          <h3 className="justin-headline">
            Hi I am Justin, <br /> Full Stack Developer.
          </h3>
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
