'use client';
import React from 'react';
import styles from './page.module.scss';
import Image from 'next/image';
import dohealthy from '/public/dummy/DoHealthy.png';
import Link from 'next/link';
// import MainSection from '../../../components/MainSection';
import Section from '../../../components/Section';


export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src={dohealthy}
          alt='symbol'
          width={100}
          height={120}
        />
        <div className={styles.nav}>
          <Link href='/test'>소개</Link>
          <Link href='/test'>스크랩</Link>
          <Link href='/test'>재료</Link>
        </div>
      </header>
      <Section />
    </div>
  );
}
