// components/services/SkillsAssessment.js
import styles from '@/styles/services/skills-assessment.module.css';

export default function SkillsAssessment() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.titleBlock}>SKILLS ASSESSMENT</div>

      <div className={styles.infoBlock}>
        <div className={styles.headerRow}>
          <span className={styles.headerLeft}>Skills Assessment</span>
          <span className={styles.headerCenter}>Price Range ⭐⭐</span>
          <span className={styles.headerRight}>Contact us for a quote</span>
        </div>

        <p className={styles.description}>
          Assistance with gathering and organizing required documents such as educational certificates, work references, and professional memberships, assessment submission, continuous support throughout the assessment process.
        </p>
      </div>
    </section>
  );
}
