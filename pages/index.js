import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";

config.autoAddCss = false;
library.add(fas, fab);

// const socials = (
// <div className="socials">
//   <a
//     href={"https://github.com/JustinHorn"}
//     title={"Github"}
//     className="social-icon"
//   >
//     <FontAwesomeIcon icon={["fab", "github"]} />
//   </a>
//   <a
//     href={"https://www.linkedin.com/in/justin-christian-horn/"}
//     title={"Linkedin"}
//     className="social-icon"
//   >
//     <FontAwesomeIcon icon={["fab", "linkedin"]} />
//   </a>

//   <a
//     href={"mailto:hello@justinhorn.io"}
//     title={"Email"}
//     className="social-icon"
//   >
//     <FontAwesomeIcon icon={["fas", "envelope"]} />
//   </a>

//   <a
//     href={"https://twitter.com/Horn00Justin"}
//     title={"Twitter"}
//     className="social-icon"
//   >
//     <FontAwesomeIcon icon={["fab", "twitter"]} />
//   </a>
//   <a
//     href={"https://stackoverflow.com/users/12753573/justin?tab=profile"}
//     title={"Stackoverflow"}
//     className="social-icon"
//   >
//     <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
//   </a>
// </div>
// );

// const header = (
//   <header>
//     <div className={"img"} />
//     <div className={"aside"}>
//       <h2>Justin Horn</h2>
//       <p>Full Stack Developer</p>
//     </div>
//   </header>
// );

function Main() {
  const [height, setHeight] = useState(0);
  const heightRef = useRef();

  useEffect(() => {
    const { height } = heightRef.current.getBoundingClientRect();

    setHeight(height);
  }, []);

  return (
    <div className="PortfolioView">
      <nav>
        <div className="socials">
          <a
            href={"https://github.com/JustinHorn"}
            title={"Github"}
            className="social-icon"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
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
          <a
            href={"https://stackoverflow.com/users/12753573/justin?tab=profile"}
            title={"Stackoverflow"}
            className="social-icon"
          >
            <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
          </a>
        </div>
        <div className="navButtons">
          <button>document</button>
          <button>german/english</button>
        </div>
      </nav>
      <header style={{ height: `calc(100vh + ${height / 2}px)` }}>
        <div className="sky">
          <div className="stars"></div>
          <div className="stars1"></div>
          <div className="stars2"></div>
        </div>
        <img ref={heightRef} className="overlay" src="/img/icons/overlap.svg" />
      </header>
      <main>
        <h2>Technology</h2>
        <h3>Frontend</h3>
        <h3>Backend</h3>
        <h3>Mobile</h3>
      </main>
    </div>
  );
}

export default Main;
