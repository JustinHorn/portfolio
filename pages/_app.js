import "styles/globals.css";
import React from "react";

import PortfolioView from "views/portfolio";
import DefaultView from "views/default";

function MyApp({ Component, pageProps, router, data }) {
  if (router.pathname.startsWith("/portfolio")) {
    return (
      <DefaultView>
        <PortfolioView>
          <Component {...pageProps} />
        </PortfolioView>
      </DefaultView>
    );
  }

  return (
    <DefaultView>
      <Component {...pageProps} />
    </DefaultView>
  );
}

export default MyApp;
