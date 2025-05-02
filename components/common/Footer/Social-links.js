// Social-links.js
import styles from '@/styles/layout/footer.module.css';
import { FaWhatsapp, FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function SocialLinks() {
  return (
    <div className={styles.socialButtons}>
      <a className={styles.socialBtn} href="https://wa.me/message/WUMLL7EBKTBAJ1" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={20} className={styles.icon} /> WHATSAPP
      </a>
      <a className={styles.socialBtn} href="https://www.linkedin.com/in/andre-petrov-dip-law-gdlp-b-econ-hons" target="_blank" rel="noopener noreferrer">
        <FaLinkedinIn size={20} className={styles.icon}  /> LINKEDIN
      </a>
      <a className={styles.socialBtn} href="#" target="_blank" rel="noopener noreferrer">
        <FaFacebookF size={20} className={styles.icon} /> FACEBOOK
      </a>
      <a className={styles.socialBtn} href="#" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={20} className={styles.icon} /> INSTAGRAM
      </a>
    </div>
  );
}
