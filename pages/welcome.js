import Profile from 'component/Profile';

import styles from 'styles/home.module.css';

import Image from 'next/image';

export default function Welcome() {
  return (
    <div className={' ' + styles.page}>
      <h1 className={styles.headline}>Hi, welcome to my Portfolio!</h1>
      <hr />

      <Profile />
    </div>
  );
}
