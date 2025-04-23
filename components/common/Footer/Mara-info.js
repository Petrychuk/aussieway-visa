// Mara-info.js
import styles from '@/styles/layout/footer.module.css';
import Image from 'next/image';

export default function MaraInfo() {
  return (
    <div className={styles.maraBlock}>
      <div className={styles.logoTextContainer}>
        <div className={styles.logoBlock}>
          <Image src="/img/Logo/MIA_Member_Blue_2.png" alt="MIA Logo" width={70} height={70} />
        </div>
        <div className={styles.maraText}>
          <p>MARA</p>
          <p>Legal Practitioner</p>
          <p>Number 5510697</p>
        </div>
      </div>
      <p className={styles.disclaimer}>
        Unauthorised use and/or duplication of this material without express and written permission from
        Checkbox Legal and Migration Services Pty Ltd is strictly prohibited. Excerpts and links may be used,
        provided that full and clear credit is given to Checkbox Legal and Migration Services Pty Ltd with
        appropriate and specific direction to the original content.
      </p>
    </div>
  );
}