import React from "react";
import Head from "next/head";
import NavBar from "component/Navbar";

const DefaultView = ({ children }) => {
  return (
    <>
      <Head>
        <title>Justin Horn</title>
        <link rel="shortcut icon" href="/code.svg" />
      </Head>
      <NavBar />
      {children}
    </>
  );
};

export default DefaultView;
