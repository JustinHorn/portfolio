import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Employment from "component/Employment";
import Header from "component/Header";
import Introduction from "component/Introduction";
import Nav from "component/Nav";
import Praise from "component/Praise";
import Projects from "component/Projects";
import Socials from "component/Socials";
import { Technology } from "component/Technology";
import Head from "next/head";
import { useRef } from "react";

config.autoAddCss = false;
library.add(fas, fab);

function Main() {
  const mainRef = useRef();

  return (
    <div className="PortfolioView">
      <Head>
        <title>Justin Horn</title>
      </Head>
      {/* <Nav /> */}
      <Header />
      <main id="main" ref={mainRef}>
        <Introduction />
        <Employment />
        <Projects />
        <Technology />
        <Praise />

        <section className="contact">
          <h2>Contact me:</h2>
          <Socials />
        </section>
      </main>
    </div>
  );
}

export default Main;
