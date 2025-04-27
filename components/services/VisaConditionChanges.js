// components/services/VisaConditionChanges.js
import styles from '@/styles/services/visa-condition-changes.module.css';

export default function VisaConditionChanges() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.titleBlock}>VISA CONDITION CHANGES</div>

      <div className={styles.infoBlock}>
        <div className={styles.headerRow}>
          <span className={styles.headerLeft}>Change Visa Conditions</span>
          <span className={styles.headerCenter}>Price Range ⭐⭐</span>
          <span className={styles.headerRight}>Contact us for a quote</span>
        </div>

        <p className={styles.description}>
          Need to change your visa conditions? We provide guidance on eligibility, documentation, and applications for condition
          changes, ensuring compliance and smooth transitions between visa conditions.
        </p>
      </div>
    </section>
  );
}

