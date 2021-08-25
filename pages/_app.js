import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

import "styles/globals.css";

config.autoAddCss = false;
library.add(fas, fab);
function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps}></Component>;
}

export default MyApp;
