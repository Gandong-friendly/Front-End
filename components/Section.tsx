import React, { useEffect, useRef, useState } from 'react';
import styles from './Section.module.scss';
import Image from 'next/image';
import salad from '/public/dummy/salad.jpg';
import search from '/public/search.png';
import { useRouter } from 'next/navigation';

export default function Section() {
  const [isVisibleMain, setIsVisibleMain] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const router = useRouter();
  const mainSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mainObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleMain(true);
        } else {
          setIsVisibleMain(false);
        }
      },
      { threshold: 0.2 }
    );



    if (mainSectionRef.current) {
      mainObserver.observe(mainSectionRef.current);
    }

    return () => {
      if (mainSectionRef.current) {
        mainObserver.unobserve(mainSectionRef.current);
      }
    };
  }, []);

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (keyword !== '') {
      router.push(`/menu/?menu=${keyword}`);
    }
  }
  return (
    <>
      <section ref={mainSectionRef} className={styles.mainSection}>
        <Image
          src={salad}
          alt='mainImage'
          layout='fill'
          objectFit='cover'
          quality={100}
          className={styles.mainImage}
        />
        <div className={styles.overlay} style={{ opacity: isVisibleMain ? 1 : 0 }}>
          <h1>Do Healthy</h1>
          <p>건강하고 맛있게</p>
          <form
            className={styles.inputBox}
            onSubmit={onSearch}
          >
            <input type="text"
              placeholder='음식, 재료 검색'
              className={styles.input}
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Image
              src={search}
              alt='searchImage'
              width={30}
              height={30}
              className={styles.inputButton}
            />
          </form>
        </div>
      </section>

    </>
  );
};

