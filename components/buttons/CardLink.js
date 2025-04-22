import { useRouter } from 'next/router';
import styles from '@/styles/layout/card-link.module.css';

export default function CardLink({ title, image, href }) {
  const router = useRouter();
  const isActive = router.pathname === href;

  return (
    <a
      href={href}
      className={`${styles.cardLink} ${isActive ? styles.active : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.labelWrapper}>{title}</div>
    </a>
  );
}
