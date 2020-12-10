import React from 'react';
import data from 'data';
import Group from 'component/Group';
import styles from 'styles/portfoliopage.module.css';

const Android = () => {
  const { android } = data;

  return (
    <div className={''}>
      <Group headline={''} projects={android} groupClass={styles.android} />
    </div>
  );
};

export default Android;
