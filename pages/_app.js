import "styles/globals.css";
import React from "react";

import PortfolioView from "views/portfolio";
import DefaultView from "views/default";

import MoveOutMoveInTransition from "component/MoveOutMoveInTransition";

import { navbarData, portfolioNavbarData } from "data";

function MyApp({ Component, pageProps, router }) {
  let c = <Component {...pageProps} />;

  c = <div key={router.asPath}>{c}</div>;

  if (router.pathname.startsWith("/portfolio")) {
    c = (
      <div key="PortfolioView">
        <PortfolioView>
          <MoveOutMoveInTransition
            lvl={1}
            pathNameOrder={portfolioNavbarData.links}
          >
            {c}
          </MoveOutMoveInTransition>
        </PortfolioView>
      </div>
    );
  }

  return (
    <DefaultView>
      <MoveOutMoveInTransition lvl={0} pathNameOrder={navbarData.links}>
        {c}
      </MoveOutMoveInTransition>
    </DefaultView>
  );
}

export default MyApp;
