import React from 'react'
import styles from './NavBar.module.scss'
export default function NavBar() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.menu}>☰</button>
        <h1>우다다</h1>
        <div className={styles.menu}>카카오?</div>
      </header>
      <div className={styles.box}>
        <div className={styles.searchBar}>
          <input type="text" placeholder='검색' className={styles.searchInput} />
        </div>

      </div>

      <div className={styles.tabMenu}>
        <button className={styles.tabButton}>홈</button>
        <button className={styles.tabButton}>스크랩</button>
        <button className={styles.tabButton}>재료</button>
      </div>
    </div>
  )
}
