import 'styles/globals.css';
import React from 'react';

import MoveOutMoveInTransition from 'component/MoveOutMoveInTransition';

import data, { portfolioNavbarData } from 'data';

import Head from 'next/head';

import styles from 'styles/portfoliopage.module.css';

import Links from 'component/Links';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);
function MyApp({ Component, pageProps, router }) {
  let children = <Component {...pageProps} />;

  return (
    <div key="PortfolioView">
      <Head>
        <title>Justin Horn</title>
        <link rel="shortcut icon" href="/code.svg" />
      </Head>
      <header>
        <div className={'img'} />
        <div className={'aside'}>
          <h2>Justin Horn</h2>
          <p>Full Stack Developer</p>
          <div className="socials">
            <a
              href={'https://github.com/JustinHorn'}
              title={'Github'}
              className="social-icon"
            >
              <FontAwesomeIcon icon={['fab', 'github']} />
            </a>
            <a
              href={'https://www.linkedin.com/in/justin-christian-horn/'}
              title={'Linkedin'}
              className="social-icon"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>

            <a
              href={'mailto:hello@justinhorn.tech'}
              title={'Email'}
              className="social-icon"
            >
              <FontAwesomeIcon icon={['fas', 'envelope']} />
            </a>

            <a
              href={'https://twitter.com/Horn00Justin'}
              title={'Twitter'}
              className="social-icon"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a
              href={
                'https://stackoverflow.com/users/12753573/justin?tab=profile'
              }
              title={'Stackoverflow'}
              className="social-icon"
            >
              <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
            </a>
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
