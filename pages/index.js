import React, { useState } from 'react';

import MoveOutMoveInTransition from 'component/MoveOutMoveInTransition';

import data, { portfolioNavbarData } from 'data';

import Head from 'next/head';

import styles from 'styles/portfoliopage.module.css';

import Link from 'next/link';

import PortfolioPage from 'component/PortfolioPage';

import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

config.autoAddCss = false;
library.add(fas, fab);
function Main({ router }) {
  const [projectType, setProjectType] = useState('web');

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
        <p>Check out my applications or visit their repositories on Github.</p>

        <nav className={styles.subNav + ' white'}>
          <button
            onClick={(e) => setProjectType('web')}
            className={projectType.includes('web') ? 'activeLink' : ''}
          >
            Web
          </button>
          <button
            onClick={(e) => setProjectType('mobile')}
            className={projectType.includes('mobile') ? 'activeLink' : ''}
          >
            Mobile
          </button>
          <button
            onClick={(e) => setProjectType('desktop')}
            className={projectType.includes('desktop') ? 'activeLink' : ''}
          >
            Desktop
          </button>
        </nav>
      </div>
      <div className={styles.portfolio + ' white'}>
        <MoveOutMoveInTransition
          path={projectType}
          pathNameOrder={['web', 'mobile', 'desktop']}
        >
          <PortfolioPage name={projectType}></PortfolioPage>
        </MoveOutMoveInTransition>
      </div>
    </div>
  );
}

export default Main;
