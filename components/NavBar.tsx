'use client';
import React, { useState, useEffect, useRef } from 'react';
import styles from './NavBar.module.scss';
import Image from 'next/image';
import dohealthy from '/public/dummy/DoHealthy.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCheck(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

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
        <Link href='/ingredients' className={pathname === '/ingredients' ? styles.currentPath : ''}>카테고리</Link>
        <span
          className={`${styles.navLink} ${pathname === '/mypage' ? styles.currentPath : ''}`}
          onClick={() => setIsCheck(!isCheck)}
        >
          마이페이지
        </span>
        {isCheck && (
          <div ref={dropdownRef} className={styles.dropdown}>
            <p className={styles.dropdownContent}>프로필</p>
            <Link href='/recipe/write' className={styles.dropdownContent}>레시피 작성</Link>
            <p className={styles.dropdownContent}>스크랩 목록</p>
          </div>
        )}
      </div>
    </header>
  );
}
