// components/layout/InfoBlock.js
import styles from '@/styles/layout/info-block.module.css';

export default function InfoBlock({ title, text, list, links }) {
  return (
    <div className={styles.block}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <ul className={styles.list}>
        {list.map((item, i) => (
          <li key={i}>
            <strong>{item.title}</strong>: {item.description}
          </li>
        ))}
      </ul>
      <p className={styles.footer}>
        Check out{' '}
        <a href={links[0].href} className={styles.link}>
          <strong>{links[0].label}</strong>
        </a>{' '}
        and{' '}
        <a href={links[1].href} className={styles.link}>
          <strong>{links[1].label}</strong>
        </a>.
      </p>
    </div>
  );
}
