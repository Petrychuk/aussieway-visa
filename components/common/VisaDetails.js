// components/sections/VisaDetails.js
import styles from '@/styles/layout/visa-details.module.css';

export default function VisaDetails({ html }) {
  return (
    <section className={styles.visaDetailsSection}>
      <div
        className={styles.visaDetails}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </section>
  );
}
