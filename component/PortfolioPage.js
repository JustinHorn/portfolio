import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import data from 'data';
import styles from 'styles/portfoliopage.module.css';
import Group from 'component/Group';

const PortfolioPage = ({ name }) => {
  const { mobile, webdev, desktop } = data;

  let projects = webdev;
  switch (name) {
    case 'mobile':
      projects = mobile;
      break;
    case 'desktop':
      projects = desktop;
      break;
    default:
      projects = webdev.projects;
  }

  return (
    <div className={''}>
      <Group headline={''} projects={projects} groupClass={styles.grid} />
    </div>
  );
};

export default PortfolioPage;
