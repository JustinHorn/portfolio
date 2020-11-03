import "styles/globals.css";
import React, { useReducer } from "react";

import PortfolioView from "views/portfolio";
import DefaultView from "views/default";

import { Flipper, Flipped } from "react-flip-toolkit";

function MyApp({ Component, pageProps, router }) {
  let c = <Component {...pageProps} />;

  c = (
    <Flipped flipId="page">
      <div>{c}</div>
    </Flipped>
  );

  if (router.pathname.startsWith("/portfolio")) {
    c = <PortfolioView>{c}</PortfolioView>;
  }
  return (
    <DefaultView>
      <Flipper flipKey={router.asPath}>{c} </Flipper>
    </DefaultView>
  );
}

export default MyApp;
