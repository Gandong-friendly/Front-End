import React, { useEffect, useRef, useState } from 'react';
import styles from './Section.module.scss';
import Image from 'next/image';
import salad from '/public/dummy/salad.jpg';
import search from '/public/search.png';

export default function Section() {
  const [isVisibleMain, setIsVisibleMain] = useState<boolean>(false);


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

    </>
  );
};

