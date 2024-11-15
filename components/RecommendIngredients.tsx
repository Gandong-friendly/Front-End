'use client';
import React, { useEffect, useRef, useState } from 'react'
import styles from './RecommendIngredients.module.scss'
import dummy02 from '/public/dummy/dummy02.jpg';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const images = [
  dummy02, // Repeat or replace this with other image imports or paths as needed
  dummy02,
  dummy02,
  dummy02
];

export default function RecommendIngredients() {

  const [isVisibleContent, setIsVisibleContent] = useState<boolean>(false);
  const contentSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleContent(true);
        } else {
          setIsVisibleContent(false);
        }
      },
      { threshold: 0.8 }
    );

    if (contentSectionRef.current) {
      contentObserver.observe(contentSectionRef.current)
    }
    return () => {
      if (contentSectionRef.current) {
        contentObserver.unobserve(contentSectionRef.current);
      }
    }
  }, [])

  return (
    <section
      ref={contentSectionRef}
      className={styles.section}
      style={{ opacity: isVisibleContent ? 1 : 0 }}
    >
      <div className={styles.ingredientsContainer}>
        <h1>Recommend Ingredients</h1>
        <p>두 헬시의 추천 재료</p>
        <div className={styles.boxborder}>


          <div className={styles.ingredientsBox}>

            {images.map((image, index) => (
              <div key={index} className={styles.ingredient}>
                <Image
                  src={image}
                  width={100}
                  height={100}
                  alt={`Ingredient ${index + 1}`}
                  className={styles.ingredientImage}
                />
              </div>

            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
