// components/common/Footer.js
import styles from '@/styles/layout/footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.topSection}>
          <div className={styles.contactBlock}>
            <h2>Contact Us</h2>
            <div className={styles.contacts}>
              <p><span>☎</span> +61 894 672 364</p>
              <p><span>✉</span> info@visaaustralia.online</p>
              <div className={styles.socials}>
                <button className={styles.button}>WHATSAPP</button>
                <button className={styles.button}>LINKEDIN</button>
                <button className={styles.button}>FACEBOOK</button>
                <button className={styles.button}>INSTAGRAM</button>
              </div>
            </div>
          </div>

          <div className={styles.legalBlock}>
            <Image src="/img/Logo/MIA_Member_Blue_2.png" alt="MIA Logo" width={70} height={70} />
            <div className={styles.legalText}>
              <p><strong>MARA</strong><br />Legal Practitioner<br />Number 5510697</p>
            </div>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <p className={styles.disclaimer}>
            Unauthorised use and/or duplication of this material without express and written permission from Checkbox Legal and Migration Services Pty Ltd is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to Checkbox Legal and Migration Services Pty Ltd with appropriate and specific direction to the original content.
          </p>

          <div className={styles.terms}>
            <Link href="/terms-of-use">Terms of Use</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>

          <p className={styles.copy}>
            &copy;2023–2025. <strong>Checkbox Legal and Migration Services Pty Ltd trading as Visa Australia Online</strong>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
