// Terms-links.js
import styles from '@/styles/layout/footer.module.css';

export default function TermsLinks() {
  return (
    <div className={styles.termsBlock}>
      <p>Liability limited by a scheme approved under Professional Standards Legislation</p>
      <div className={styles.termsLinks}>
        <a href="/pdf/terms_of_use.pdf" target="_blank">Terms of Use</a>
        <a href="/pdf/privacy_policy.pdf" target="_blank">Privacy Policy</a>
      </div>
    </div>
  );
}
