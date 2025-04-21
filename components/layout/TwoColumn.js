import styles from '@/styles/layout/two-column.module.css';

export default function TwoColumn({ left, right }) {
  return (
    <div className={styles.twoColumnWrapper}>
      <div className={styles.column}>{left}</div>
      <div className={styles.column}>{right}</div>
    </div>
  );
}
