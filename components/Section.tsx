import React, { useEffect, useRef, useState } from 'react';
import styles from './Section.module.scss';
import Image from 'next/image';
import salad from '/public/dummy/salad.jpg';
import search from '/public/search.png';

import dummy01 from '/public/dummy/dummy01.jpg';

export default function Section() {
  const [isVisibleMain, setIsVisibleMain] = useState(false);
  const [isVisibleContent, setIsVisibleContent] = useState(false);
  const mainSectionRef = useRef<HTMLDivElement | null>(null);
  const contentSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mainObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleMain(true);
        } else {
          setIsVisibleMain(false);
        }
      },
      { threshold: 0.1 }
    );

    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleContent(true);
        } else {
          setIsVisibleContent(false);
        }
      },
      { threshold: 0.5 }
    );

    if (mainSectionRef.current) {
      mainObserver.observe(mainSectionRef.current);
    }

    if (contentSectionRef.current) {
      contentObserver.observe(contentSectionRef.current);
    }

    return () => {
      if (mainSectionRef.current) {
        mainObserver.unobserve(mainSectionRef.current);
      }
      if (contentSectionRef.current) {
        contentObserver.unobserve(contentSectionRef.current);
      }
    };
  }, []);

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
          <form className={styles.inputBox}>
            <input type="text" placeholder='재료 입력' className={styles.input} />
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

      <section
        ref={contentSectionRef}
        className={styles.section}
        style={{ opacity: isVisibleContent ? 1 : 0 }}
      >
        <div className={styles.contentOverlay}>
          <div>
            <p>Recommend Recipe</p>
            <h1>두 헬시의 추천 레시피를 만나보세요</h1>
            <div className={styles.recipeContainer}>
              <div className={styles.recipe}>
                <Image
                  src={dummy01}
                  alt='dummyFood'
                  width={200}
                  height={200}
                />
              </div><div className={styles.recipe}>
                <Image
                  src={dummy01}
                  alt='dummyFood'
                  width={200}
                  height={200}
                />
              </div><div className={styles.recipe}>
                <Image
                  src={dummy01}
                  alt='dummyFood'
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

