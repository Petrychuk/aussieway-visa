// components/common/ColoredButton.js
import Link from 'next/link';
import styles from '@/styles/services/colored-button.module.css';

export default function ColoredButton({ text, href, color = 'orange', fullWidth = false }) {
  return (
    <Link href={href} className={`${styles.button} ${styles[color]} ${fullWidth ? styles.fullWidth : ''}`}>
      {text}
    </Link>
  );
}
