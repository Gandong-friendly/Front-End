import React, { useEffect, useRef, useState } from 'react'
import styles from './RecommendRecipe.module.scss'
import Image from 'next/image';
import dummy01 from '/public/dummy/dummy01.jpg';
import dummy02 from '/public/dummy/dummy02.jpg';
import dummy03 from '/public/dummy/dummy03.jpg';
import Marquee from 'react-fast-marquee';

const images = [dummy01, dummy02, dummy03, dummy02]; // 이미지 배열
export default function RecommendRecipe() {
  const [isVisibleContent, setIsVisibleContent] = useState<boolean>(false);
  const [hoverdIndex, setHoverdIndex] = useState<number | null>(null);

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
      { threshold: 0.2 }
    );
    if (contentSectionRef.current) {
      contentObserver.observe(contentSectionRef.current);
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
      <div className={styles.recipeContainer}>
        <h1>Recommend Recipe</h1>
        <p>두 헬시의 추천 레시피를 만나보세요.</p>
        <div className={styles.recipeBox}>

          <Marquee gradient={false} speed={30} pauseOnHover={true}>
            {
              images.map((image, index) => (
                <div
                  key={index}
                  className={styles.recipe}
                >
                  <Image
                    src={image}
                    alt='image'
                    className={styles.recipeImage}

                    onMouseEnter={() => setHoverdIndex(index)}
                    onMouseLeave={() => setHoverdIndex(null)}
                  />
                  <p
                    className={styles.recipeText}
                    style={{ opacity: hoverdIndex === index ? 1 : 0 }}
                  >
                    {index + 1}
                  </p>
                </div>
              ))
            }
          </Marquee>
        </div>
      </div>
    </section>
  )
}
