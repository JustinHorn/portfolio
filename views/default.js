import React from "react";
import Head from "next/head";
import Navbar from "component/Navbar";

const DefaultView = ({ children }) => {
  return (
    <>
      <Head>
        <title>Justin Horn</title>
        <link rel="shortcut icon" href="/code.svg" />
      </Head>
      <Navbar />
      {children}
    </>
  );
};

export default DefaultView;
