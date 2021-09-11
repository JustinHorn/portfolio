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

config.autoAddCss = false;
library.add(fas, fab);

function Main() {
  return (
    <div className="PortfolioView">
      <Head>
        <title>Justin Horn</title>
      </Head>
      <Nav />
      <Header />
      <main id="main">
        <Technology />
        <Praise />
        <JoyOfCode />
        <Projects />
        <section id="about" className="about">
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
        </section>
      </main>
    </div>
  );
}

export default Main;
