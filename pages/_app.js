import "styles/globals.css";
import React, { useReducer } from "react";

import PortfolioView from "views/portfolio";
import DefaultView from "views/default";

import MoveOutMoveInTransition from "component/MoveOutMoveInTransition";

function MyApp({ Component, pageProps, router }) {
  let c = <Component {...pageProps} />;

  c = <div key={router.asPath}>{c}</div>;

  if (router.pathname.startsWith("/portfolio")) {
    c = (
      <div key="PortfolioView">
        <PortfolioView>
          <MoveOutMoveInTransition>{c}</MoveOutMoveInTransition>
        </PortfolioView>
      </div>
    );
  }
  return (
    <DefaultView>
      <MoveOutMoveInTransition>{c}</MoveOutMoveInTransition>
    </DefaultView>
  );
}

export default MyApp;
