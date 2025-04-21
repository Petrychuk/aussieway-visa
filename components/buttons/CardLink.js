import styles from '@/styles/layout/card-link.module.css';
import Link from 'next/link';

export default function CardLink({ title, image, href, isActive = false }) {
  return (
    <Link
      href={href}
      className={`${styles.cardLink} ${isActive ? 'active' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <span className={styles.labelWrapper}>
        <span className={styles.checkmark}></span>
        {title}
      </span>
    </Link>
  );
}
