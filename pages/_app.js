import 'styles/globals.css';
import React from 'react';

import MoveOutMoveInTransition from 'component/MoveOutMoveInTransition';

import data, { portfolioNavbarData } from 'data';

import Head from 'next/Head';

import styles from 'styles/portfoliopage.module.css';

import Links from 'component/Links';

import Socials from 'component/Socials';

import Link from 'next/Link';

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
            <p>Full Stack Developer</p>
          </div>
        </div>
      </header>
      <div className="waveWrapper waveAnimation">
        <div className="waveWrapperInner bgTop">
          <div className="wave waveTop"></div>
        </div>
        <div className="waveWrapperInner bgMiddle">
          <div className="wave waveMiddle"></div>
        </div>
        <div className="waveWrapperInner bgBottom">
          <div className="wave waveBottom"></div>
        </div>
      </div>
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
        <MoveOutMoveInTransition pathNameOrder={portfolioNavbarData.links}>
          {children}
        </MoveOutMoveInTransition>
      </div>
    </div>
  );
}

export default MyApp;
