// components/services/EligibilityAssessment.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/services/eligibility-assessment.module.css';

export default function EligibilityAssessment() {
  return (
    <section className={styles.wrapper}>
      <Link href="/book-consultation.html" className={`${styles.titleButton} ${styles.buttonAnimate}`}>
        ELIGIBILITY ASSESSMENT
      </Link>

      <div className={styles.infoBlock}>
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <Image
              src="/img/icons/double-tick-black.svg"   // путь к новой иконке
              alt="Double Tick"
              width={15}
              height={15}
              className={styles.icon}
            />
            <span>Initial Consultation</span>
          </div>
          <span className={styles.headerCenter}>Price Range ⭐</span>
          <span className={styles.headerRight}>30 MIN FREE THEN A FEE WILL APPLY</span>
        </div>

        <p className={styles.description}>
          We will evaluate your situation and if you match the requirements we will advise on the best visa pathways, 
          providing you with the guidance you need to choose the most suitable visa for your circumstances.
        </p>
      </div>
    </section>
  );
}
