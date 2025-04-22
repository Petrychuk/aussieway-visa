// components/common/Intro.js
import styles from '@/styles/layout/intro.module.css';
import Image from 'next/image';

export default function Intro({ title, highlight, subtitle, html, image, alt }) {
  return (
    <section className={styles.introSection}>
      <div className={styles.introContent}>
        <div className={styles.introHeaderWrapper}>
          <div className={styles.backgroundOverlay}>
            <h1>
              {title} <br /> <span className={styles.coloredWord}>{highlight}</span>
            </h1>
          </div>
        </div>
        <div className={styles.introCard}>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.textBlock} dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      <div className={styles.introImageWrapper}>
        <Image src={image} alt={alt} className={styles.introImage} width={500} height={300} />
      </div>
    </section>
  );
}