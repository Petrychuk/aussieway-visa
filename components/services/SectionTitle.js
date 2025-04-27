// components/common/SectionTitle.js
import styles from '@/styles/services/section-title.module.css';

export default function SectionTitle({ title }) {
  return (
    <h2 className={styles.sectionTitle}>
      {title}
    </h2>
  );
}

