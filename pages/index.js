import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Employment from "component/Employment";
import Header from "component/Header";
import Introduction from "component/Introduction";
import { JoyOfCode } from "component/JoyOfCode";
import Nav from "component/Nav";
import { Praise } from "component/Praise";
import Projects from "component/Projects";
import Socials from "component/Socials";
import { Technology } from "component/Technology";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";

config.autoAddCss = false;
library.add(fas, fab);

function Main() {
  const innerRef = useRef();
  const mainRef = useRef();

  const [height, setHeight] = useState("");

  // useEffect(() => {
  //   const { top: topHeadline, height: headlineHeight } =
  //     innerRef.current.getBoundingClientRect();
  //   const topMain = mainRef.current.getBoundingClientRect().top;

  //   setHeight(topHeadline - topMain + Math.floor(headlineHeight / 2) + "px");
  // }, []);

  return (
    <div className="PortfolioView">
      <Head>
        <title>Justin Horn</title>
      </Head>
      <Nav />
      <Header />
      <main id="main" ref={mainRef}>
        <Introduction />
        <Employment />
        {/* <JoyOfCode headlineRef={innerRef} /> */}
        <Projects />
        <Technology />

        <section className="contact">
          <h2>Contact me:</h2>
          <Socials />
        </section>
      </main>
    </div>
  );
}

export default Main;
