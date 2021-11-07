import Contact from "component/Contact";
import Employment from "component/Employment";
import Header from "component/Header";
import Introduction from "component/Introduction";
import Nav from "component/Nav";
import Praise from "component/Praise";
import Projects from "component/Projects";
import { Technology } from "component/Technology";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { useRef, useState } from "react";
import de from "translations/de";
import en from "translations/en";

Number.prototype.clamp = function (min, max) {
  return Math.min(Math.max(this, min), max);
};

function Main() {
  const mainRef = useRef();

  const [showMonitor, setShowMonitor] = useState("nothing");

  const t = useTranslations();

  return (
    <div className="PortfolioView">
      <Head>
        <title>Justin Horn Portfolio</title>
        <meta name="robots" content="index, follow" />
      </Head>
      <Header />
      {showMonitor === "nothing" && <Nav />}
      <main id="main" ref={mainRef}>
        <Projects {...{ showMonitor, setShowMonitor }} />
        <Introduction />
        <Employment />
        <Technology />
        <Praise />
        <Contact />
      </main>
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      // You can get the messages from anywhere you like, but the recommended
      // pattern is to put them in JSON files separated by language and read
      // the desired one based on the `locale` received from Next.js.
      messages: locale === "de" ? de : en,
    },
  };
}

export default Main;
