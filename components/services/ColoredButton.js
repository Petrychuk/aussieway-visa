// components/common/ColoredButton.js
import Link from 'next/link';
import styles from '@/styles/services/colored-button.module.css';

export default function ColoredButton({ text, href, color = 'orange', fullWidth = false }) {
  const isExternal = href.startsWith('http'); // Проверяем внешний или внутренний линк

  const buttonClass = `${styles.button} ${styles[color]} ${fullWidth ? styles.fullWidth : ''}`;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClass}
      >
        {text}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClass}>
      {text}
    </Link>
  );
}
