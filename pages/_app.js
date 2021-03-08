import 'styles/globals.css';
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
function MyApp({ Component, pageProps, router }) {
  return <Component {...pageProps}></Component>;
}

export default MyApp;
