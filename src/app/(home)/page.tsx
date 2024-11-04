import React from 'react';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.cardList}>
        <div className={styles.card}>카드 내용</div>
        <div className={styles.card}>카드 내용</div>
        <div className={styles.card}>카드 내용</div>
      </div>
    </div>
  );
}
