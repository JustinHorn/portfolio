import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "component/Header";
import Nav from "component/Nav";
import { Technology } from "component/Technology";
import { Praise } from "component/Praise";
import Head from "next/head";
import React from "react";

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
        <section id="projects" className="projects">
          <h2>Some Projects I made with</h2>
        </section>
      </main>
    </div>
  );
}

export default Main;
