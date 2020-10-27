import "styles/globals.css";

import Link from "next/link";

import LinkIcon from "component/Icon/LinkIcon";
import { footer } from "data";

import styles from "styles/portfoliopage.module.css";

import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  if (router.pathname.startsWith("/portfolio")) {
    return (
      <DefaultView>
        <Portfolio>
          <Component {...pageProps} />
        </Portfolio>
      </DefaultView>
    );
  }

  return (
    <DefaultView>
      <Component {...pageProps} />
    </DefaultView>
  );
}

const DefaultView = ({ children }) => {
  const { icons } = footer;

  return (
    <>
      <Head>
        <title>Justin Horn</title>
        <link rel="shortcut icon" href="/code.svg" />
      </Head>
      <div className="medium">
        <nav className="mainNav space-between">
          <div className="links">
            <Link exact activeClassName="activeLink" href="/">
              Welcome
            </Link>
            <Link activeClassName="activeLink" href="/portfolio/web">
              Portfolio
            </Link>

            <Link activeClassName="activeLink" href="/tech">
              Tech
            </Link>
          </div>
          <div className="social">
            {icons.map((icon, index) => (
              <LinkIcon key={index} {...icon} />
            ))}
          </div>
        </nav>
      </div>
      {children}
    </>
  );
};

const Portfolio = ({ children }) => {
  return (
    <>
      <div className="contrast">
        <nav className={styles.subNav + " medium"}>
          <Link exact activeClassName="activeLink" href="/portfolio/web">
            Web
          </Link>
          <Link activeClassName="activeLink" href="/portfolio/android">
            Android
          </Link>

          <Link activeClassName="activeLink" href="/portfolio/windows">
            Windows
          </Link>
        </nav>
      </div>
      <div className={styles.portfolio + " contrast"}>{children}</div>
    </>
  );
};

export default MyApp;
