// Contact-info.js
import styles from '@/styles/layout/footer.module.css';

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactItem}>
        <i className="bi bi-telephone-fill"></i>
        <span>+61 894 672 364</span>
      </div>
      <div className={styles.contactItem}>
        <i className="bi bi-envelope-fill"></i>
        <span>info@visaaustralia.online</span>
      </div>
    </div>
  );
}