import React from 'react';
import styles from './NavBar.module.scss';
import Image from 'next/image';
import dohealthy from '/public/dummy/DoHealthy.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  return (
    <header className={styles.header}>
      <Image
        src={dohealthy}
        alt='symbol'
        width={100}
        height={120}
      />
      <div className={styles.nav}>
        <Link href='/' className={pathname === '/' ? styles.currentPath : ''}>홈</Link>
        <Link href='/scrap' >스크랩</Link>
        <Link href='/ingredients'>재료</Link>
      </div>
    </header>
  );
}
