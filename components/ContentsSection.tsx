'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Section.module.scss';
import Image from 'next/image';
import dummy01 from '/public/dummy/dummy01.jpg';
import dummy02 from '/public/dummy/dummy02.jpg';
import dummy03 from '/public/dummy/dummy03.jpg';

const images = [dummy01, dummy02, dummy03]; // 이미지 배열

export default function ContentsSection() {
  const [isVisibleContent, setIsVisibleContent] = useState<boolean>(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredIngIndex, setHoveredIngIndex] = useState<number | null>(null);
  const contentSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const contentObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleContent(true);
        } else {
          setIsVisibleContent(false);
        }
      },
      { threshold: 0.1 }
    );

    if (contentSectionRef.current) {
      contentObserver.observe(contentSectionRef.current);
    }

    return () => {
      if (contentSectionRef.current) {
        contentObserver.unobserve(contentSectionRef.current);
      }
    };
  }, []);

  return (
    <>
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
              {images.map((image, index) => (
                <div key={index} className={styles.recipe}>
                  <Image
                    src={image}
                    alt={`dummyFood ${index + 1}`}
                    width={200}
                    height={200}
                    className={styles.recipeImage}
                    onMouseEnter={() => setHoveredIngIndex(index)}
                    onMouseLeave={() => setHoveredIngIndex(null)}
                  />
                  <p
                    className={styles.recipeText}
                    style={{
                      opacity: hoveredIngIndex === index ? 1 : 0,
                    }}
                  >
                    {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        ref={contentSectionRef}
        className={styles.section}
        style={{ opacity: isVisibleContent ? 1 : 0 }}
      >
        <div className={styles.contentOverlay}>
          <p>Recommend Ingredients</p>
          <h1>두 헬시에서의 추천 재료</h1>
          <div className={styles.recipeContainer}>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className={styles.recipe}>
                <Image
                  src={dummy02} // 이 부분은 계속 dummy02로 유지
                  alt={`dummyFood ${index + 1}`}
                  width={150}
                  height={150}
                  className={styles.recipeImage}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                />
                <p
                  className={styles.recipeText}
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                  }}
                >
                  두부 {index + 1}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
