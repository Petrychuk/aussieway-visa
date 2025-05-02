// Contact-info.js
// Contact-info.js
import styles from '@/styles/layout/footer.module.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactInfo() {
  return (
    <div className={styles.contactInfo}>
      <div className={styles.contactItem}>
        <FaPhoneAlt size={20} className={styles.icon} />
        <span>+61 894 672 364</span>
      </div>
      <div className={styles.contactItem}>
        <FaEnvelope size={20} className={styles.icon} />
        <span>info@visaaustralia.online</span>
      </div>
    </div>
  );
}
