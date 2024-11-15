'use client';
import React from 'react';
import styles from './page.module.scss';
import Section from '../../../components/Section';
import NavBar from '../../../components/NavBar';
import RecommendRecipe from '../../../components/RecommendRecipe';
import RecommendIngredients from '../../../components/RecommendIngredients';


export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Section />
      <RecommendRecipe />
      <RecommendIngredients />
      <footer className={styles.footer}>
        ㅇㅁㄴㅁㅇㄴ
      </footer>
    </div>
  );
}
