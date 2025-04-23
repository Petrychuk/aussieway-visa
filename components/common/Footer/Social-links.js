// Social-links.js
import styles from '@/styles/layout/footer.module.css';

export default function SocialLinks() {
  return (
    <div className={styles.socialButtons}>
      <a className={styles.socialBtn} href="https://wa.me/message/WUMLL7EBKTBAJ1" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp"></i> WHATSAPP
      </a>
      <a className={styles.socialBtn} href="https://www.linkedin.com/in/andre-petrov-dip-law-gdlp-b-econ-hons-2436988b/" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-linkedin"></i> LINKEDIN
      </a>
      <a className={styles.socialBtn} href="#" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-facebook"></i> FACEBOOK
      </a>
      <a className={styles.socialBtn} href="#" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-instagram"></i> INSTAGRAM
      </a>
    </div>
  );
}