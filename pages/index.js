import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "component/Header";
import Nav from "component/Nav";
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
