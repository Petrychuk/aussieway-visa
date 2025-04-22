import styles from '@/styles/layout/two-column.module.css';

export default function TwoColumn({ left, right }) {
  return (
    <div className={styles.twoColumn}>
      <div className={styles.left}>{left}</div>
      <div className={styles.right}>{right}</div>
    </div>
  );
}

