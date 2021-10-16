import Employment from "component/Employment";
import Header from "component/Header";
import Introduction from "component/Introduction";
import Praise from "component/Praise";
import Projects from "component/Projects";
import Contact from "component/Contact";
import { Technology } from "component/Technology";
import Head from "next/head";
import { useRef } from "react";
import Nav from "component/Nav";

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max);
};

function Main() {
  const mainRef = useRef();

  return (
    <div className="PortfolioView">
      <Head>
        <title>Justin Horn Portfolio</title>
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      <Nav />
      <main id="main" ref={mainRef}>
        <Introduction />
        <Employment />
        <Projects />
        <Technology />
        <Praise />
        <Contact />
      </main>
    </div>
  );
}

export default Main;
