import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "component/Header";
import { JoyOfCode } from "component/JoyOfCode";
import Nav from "component/Nav";
import { Praise } from "component/Praise";
import Projects from "component/Projects";
import { Technology } from "component/Technology";
import Head from "next/head";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useRef, useEffect, useState } from "react";
import Socials from "component/Socials";

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
        <section className="introduction">
          <div className="text">
            <h3>About me:</h3>
            <p>
              I am a young ambitous developer eager for the next challenge. I
              identify with my work and straive to achieve the best.
            </p>
            <p>
              Other interests of mine include spaceflight, Chess and
              anthropology.
            </p>
          </div>
          <div className="container">
            <div className="img" alt="me" />
          </div>
        </section>

        <section className="employment">
          <h2>Whom I have worked for</h2>
        </section>
        {/* <JoyOfCode headlineRef={innerRef} /> */}
        <Projects />
        <Technology />
        {/* <Praise /> */}

        <section className="contact">
          <h2>Contact me</h2>
          <Socials />
        </section>
        {/* <section id="about" className="about">
          <p>
            I gained my first coding experience at the age of twelve by coding a
            small shooter in scratch. Over years I switched back and forth
            between coding and other hobbies. Only when I started studying IT I
            made it my passion and decided to put the acquiration of skill over
            the gathering of certificates. This ultimately caused me to quite my
            education, try myself as en entrepreneur and build a ton of projects
            alone and with friends. Through this projects I got a ton of
            experience and become the skilled and versatile developer that I am.
          </p>
        </section> */}
      </main>
    </div>
  );
}

export default Main;
