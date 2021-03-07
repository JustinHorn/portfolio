import 'styles/globals.css';
import React from 'react';

import MoveOutMoveInTransition from 'component/MoveOutMoveInTransition';

import data, { portfolioNavbarData } from 'data';

import Head from 'next/Head';

import styles from 'styles/portfoliopage.module.css';

import Links from 'component/Links';

import Socials from 'component/Socials';

function MyApp({ Component, pageProps, router }) {
  let children = <Component {...pageProps} />;

  return (
    <div key="PortfolioView">
      <Head>
        <title>Justin Horn</title>
        <link rel="shortcut icon" href="/code.svg" />
      </Head>
      <header>
        <div className={'imgTitle'}>
          <div className={'img'} />
          <div className={'aside'}>
            <h2>Justin Horn</h2>
          </div>
        </div>
        <div className={'aboutMe'}>{data.header.aboutMe}</div>
      </header>
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
      <div className="center">
        <Socials />
      </div>
    </div>
  );
}

export default MyApp;
