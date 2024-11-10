'use client';
import React from 'react';
import styles from './menu.module.scss';
import NavBar from '../../../components/NavBar';
import Image from 'next/image';
import dummy01 from '/public/dummy/dummy01.jpg';

export default function Page() {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.menuContainer}>
        <div className={styles.card}>
          <Image src={dummy01} alt='dummy' width={200} height={200} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <p className={styles.title}>Title</p>
            <span className={styles.username}>사용자 이름</span>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={dummy01} alt='dummy' width={200} height={200} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <p className={styles.title}>무생채</p>
            <span className={styles.username}>사용자 이름</span>
          </div>
        </div><div className={styles.card}>
          <Image src={dummy01} alt='dummy' width={200} height={200} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <p className={styles.title}>무생채</p>
            <span className={styles.username}>사용자 이름</span>
          </div>
        </div><div className={styles.card}>
          <Image src={dummy01} alt='dummy' width={200} height={200} className={styles.cardImage} />
          <div className={styles.cardContent}>
            <p className={styles.title}>무생채</p>
            <span className={styles.username}>사용자 이름</span>
          </div>
        </div>
      </div>
    </div>
  );
}
