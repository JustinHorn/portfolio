import "styles/globals.css";
import React, { useEffect, useReducer, useRef, useState } from "react";

import PortfolioView from "views/portfolio";
import DefaultView from "views/default";

import MoveOutMoveInTransition from "component/MoveOutMoveInTransition";

import { navbar, portfolionav } from "data";

const portfolioNavLinks = portfolionav.links.map(
  (l) => portfolionav.prefix + l
);

const getSecondSlash = (string) => {
  let secondSlash = string.indexOf("/", 1);
  secondSlash === -1 && (secondSlash = string.length);
  return secondSlash;
};

let links = navbar.links.map((l) => l.slice(1, getSecondSlash(l)));

function MyApp({ Component, pageProps, router }) {
  let c = <Component {...pageProps} />;

  c = <div key={router.asPath}>{c}</div>;

  if (router.pathname.startsWith("/portfolio")) {
    c = (
      <div key="PortfolioView">
        <PortfolioView>
          <MoveOutMoveInTransition navbarlinks={portfolioNavLinks}>
            {c}
          </MoveOutMoveInTransition>
        </PortfolioView>
      </div>
    );
  }

  return (
    <DefaultView>
      <MoveOutMoveInTransition navbarlinks={links}>{c}</MoveOutMoveInTransition>
    </DefaultView>
  );
}

const usePrevious = (next) => {
  const prev = useRef({});
  useEffect(() => {
    prev.current = next;
  }, [next]);

  return prev;
};

export default MyApp;
