'use client';
import React from 'react';
import styles from './page.module.scss';
import Section from '../../../components/Section';
import ContentsSection from '../../../components/ContentsSection';
import NavBar from '../../../components/NavBar';


export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Section />
      <ContentsSection />
      <footer className={styles.footer}>
        ㅇㅁㄴㅁㅇㄴ
      </footer>
    </div>
  );
}
