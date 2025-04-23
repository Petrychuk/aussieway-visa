import styles from '@/styles/layout/more-details.module.css';
import Link from 'next/link';

export default function MoreDetailsBlock({ href }) {
  return (
    <div className={styles.moreDetails}>
      <h3 className={styles.title}>More Details</h3>
      <p>
        For a full list of Australian Visas and the visa requirements please visit the{' '}
        <Link href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
          official website of the Department of Home Affairs
        </Link>
      </p>
    </div>
  );
}
