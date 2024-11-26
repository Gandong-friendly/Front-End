'use client';
import React, { useRef, useState } from 'react';
import NavBar from '../../../../components/NavBar';
import styles from './write.module.scss';
import Image from 'next/image'; // Next.js Image 컴포넌트
import { PostType } from '../../../../types/PostType';

export default function page() {
  const [formData, setFormData] = useState<PostType>({
    title: '',
    description: '',
    videoLink: '',
    category: [],
    ingredients: [{ name: '', quantity: '' }],
  });

  const [imgFile, setImgFile] = useState<File | null>(null); // 실제 파일 객체로 유지
  const [imgPreview, setImgPreview] = useState<string | null>(null); // 이미지 미리보기 URL
  const imgRef = useRef<HTMLInputElement>(null);

  // 이미지 업로드 input
  const saveImgFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // 선택된 파일을 가져옵니다.
    if (file) {
      setImgFile(file); // 파일 객체를 상태에 저장

      // 미리보기 URL 생성
      const previewUrl = URL.createObjectURL(file);
      setImgPreview(previewUrl);
    }
  };

  // 이미지 삭제
  const deleteImgFile = () => {
    setImgFile(null); // 이미지 파일 삭제
    setImgPreview(null); // 미리보기 URL 삭제
  };

  const handleIngredientChange = (index: number, key: 'name' | 'quantity', value: string) => {
    const updatedIngredients = formData.ingredients.map((ingredient, i) =>
      i === index ? { ...ingredient, [key]: value } : ingredient
    );
    setFormData((prev) => ({
      ...prev,
      ingredients: updatedIngredients,
    }));
  };

  // 재료 추가
  const handleAddIngredient = () => {
    setFormData((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: '', quantity: '' }],
    }));
  };

  // 재료 삭제
  const handleRemoveIngredient = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.recipe}>
          <h2 className={styles.recipeTitle}>레시피 작성</h2>
          <section className={styles.formSection}>
            <form className={styles.form}>
              <label htmlFor="title" className={styles.label}>레시피 제목</label>
              <input
                type="text"
                id="title"
                placeholder="예) 닭가슴살 샐러드"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className={styles.input}
              />
            </form>
            <form className={styles.form}>
              <label htmlFor="description" className={styles.label}>레시피 소개</label>
              <input
                type="text"
                id="description"
                placeholder="레시피를 소개하는 글을 작성해주세요."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className={styles.input}
              />
            </form>
            <form className={styles.form}>
              <label htmlFor="image" className={styles.label}>대표 이미지 첨부</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                ref={imgRef}
                onChange={saveImgFile}
                className={styles.fileInput}
              />
              <div className={styles.imagePreviewWrapper}>
                {imgPreview ? (
                  <Image
                    src={imgPreview} // 미리보기 이미지 URL을 사용
                    alt="이미지 미리보기"
                    width={300}
                    height={200}
                    className={styles.imagePreview}
                  />
                ) : (
                  <div className={styles.emptyImagePreview}></div>
                )}
                {imgFile && (
                  <button type="button" onClick={deleteImgFile} className={styles.deleteImageBtn}>
                    이미지 삭제
                  </button>
                )}
              </div>
            </form>
            <form className={styles.form}>
              <label htmlFor="videoLink" className={styles.label}>동영상 링크</label>
              <input
                type="text"
                id="videoLink"
                placeholder="동영상이 있다면 주소를 입력해주세요. ex) youtube"
                value={formData.videoLink}
                onChange={(e) => setFormData({ ...formData, videoLink: e.target.value })}
                className={styles.input}
              />
            </form>
            <section className={styles.categorySection}>
              <form className={styles.form}>
                <label htmlFor="category" className={styles.label}>카테고리</label>
                <input
                  type="text"
                  id="category"
                  placeholder="마늘 감자 닭가슴살 두부"
                  value={formData.category.join(' ')}
                  onChange={(e) => {
                    const categoryArray = e.target.value.split(' ').map(category => category);
                    setFormData({
                      ...formData,
                      category: categoryArray,
                    });
                  }}
                  className={styles.input}
                />
                <span className={styles.note}>띄어쓰기로 단어를 구분해주세요!</span>
              </form>
              <form className={styles.form}>
                <label className={styles.label}>재료</label>
                {formData.ingredients.map((ingredient, index) => (
                  <div key={index} className={styles.ingredientRow}>
                    <input
                      type="text"
                      placeholder="재료 이름"
                      value={ingredient.name}
                      onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                      className={styles.ingredientInput}
                    />
                    <input
                      type="text"
                      placeholder="ex) 한 스푼, 600g"
                      value={ingredient.quantity}
                      onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                      className={styles.ingredientInput}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveIngredient(index)}
                      className={styles.removeIngredientBtn}
                    >
                      삭제
                    </button>
                  </div>
                ))}
                <button type="button" onClick={handleAddIngredient} className={styles.addIngredientBtn}>
                  재료 추가
                </button>
              </form>
            </section>
            <button className={styles.submitBtn}>
              테스트
            </button>
          </section>
        </div>
      </div>
    </>
  );
}
