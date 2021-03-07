import styles from 'styles/portfoliopage.module.css';

import Links from 'component/Links';

import { portfolioNavbarData } from 'data';

import Profile from 'component/Profile';

import Head from 'next/Head';

const PortfolioView = ({ children }) => {
  return (
    <>
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
      <div className={styles.portfolio + ' white'}>{children}</div>
    </>
  );
};

export default PortfolioView;
