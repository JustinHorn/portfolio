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
        <h3 className="justin-headline">
          Hi I am Justin, <br /> welcome to my fullstack portfolio.
        </h3>
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
