// components/common/Intro.js
import styles from '@/styles/layout/intro.module.css';
import IntroText from '@/components/common/IntroText';
import IntroImage from '@/components/common/IntroImage';

export default function Intro({ title, highlight, subtitle, html, image, alt }) {
  return (
    <section className={styles.introSection}>
      <IntroText title={title} highlight={highlight} subtitle={subtitle} html={html} />
      <IntroImage src={image} alt={alt} />
    </section>
  );
}
