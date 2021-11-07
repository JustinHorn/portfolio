import { config, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFile, fas } from "@fortawesome/free-solid-svg-icons";
import { NextIntlProvider } from "next-intl";
import React, { useEffect } from "react";
import { useRouter } from "next/router";

import "styles/globals.scss";

config.autoAddCss = false;
library.add(fas, fab, faFile);

function MyApp({ Component, pageProps, router }) {
  const { locale } = useRouter();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps}></Component>
    </NextIntlProvider>
  );
}

export default MyApp;
