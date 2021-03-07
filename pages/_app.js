import 'styles/globals.css';
import React from 'react';

import PortfolioView from 'views/portfolio';

import MoveOutMoveInTransition from 'component/MoveOutMoveInTransition';

import { portfolioNavbarData } from 'data';

import Head from 'next/Head';

import styles from 'styles/portfoliopage.module.css';

import Links from 'component/Links';

import Profile from 'component/Profile';

import Socials from 'component/Socials';

function MyApp({ Component, pageProps, router }) {
  let children = <Component {...pageProps} />;

  return (
    <div key="PortfolioView">
      <Head>
        <title>Justin Horn</title>
        <link rel="shortcut icon" href="/code.svg" />
      </Head>
      <Profile />

      <div className=" white">
        <div className="space-50"></div>
        <h2>PROJECTS</h2>
        <p>
          Check out my deployed app or visit my Github page to view current
          projects.
        </p>
        <nav className={styles.subNav + ' white'}>
          <Links {...portfolioNavbarData} />
        </nav>
      </div>
      <div className={styles.portfolio + ' white'}>
        <MoveOutMoveInTransition
          lvl={0}
          pathNameOrder={portfolioNavbarData.links}
        >
          {children}
        </MoveOutMoveInTransition>
      </div>
      <Socials />
    </div>
  );
}

export default MyApp;
