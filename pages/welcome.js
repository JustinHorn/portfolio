import Profile from 'component/Profile';

import styles from 'styles/home.module.css';

import Image from 'next/image';

export default function Welcome() {
  return (
    <div className={' ' + styles.page}>
      <Profile />
    </div>
  );
}
