import styles from '@/styles/layout/footer.module.css';
import ContactInfo from '@/components/common/Footer/Contact-info';
import MaraInfo from '@/components/common/Footer/Mara-info';
import SocialLinks from '@/components/common/Footer/Social-links';
import TermsLinks from '@/components/common/Footer/Terms-links';
import Copyright from '@/components/common/Footer/Copyright';


  export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}> {/* ✅ Добавлен wrapper */}
        <div className={styles.footerContainer}>
          <div className={styles.leftSection}>
            <MaraInfo />
          </div>

          <div className={styles.rightSection}>
            <ContactInfo />
            <SocialLinks />
            <TermsLinks />
          </div>
        </div>

        <Copyright />
      </div>
    </footer>
  );
}
