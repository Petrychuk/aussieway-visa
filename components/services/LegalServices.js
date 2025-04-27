// components/services/LegalServices.js
import styles from '@/styles/services/legal-services.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function LegalServices() {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>SETTLE IN AUSTRALIA LEGAL SERVICES</h2>

      <p className={styles.description}>
        When you become our client, you also enjoy an extra benefit of having a priority access to our legal services
        delivered by the experienced Australian lawyer Andre Petrov from Checkbox Legal. Check out our{' '}
        <Link href="https://checkboxlegal.com.au" target="_blank" className={styles.link}>legal services website</Link>{' '}
        for more detail and{' '}
        <Link href="/contact" className={styles.link}>contact us now</Link> if you need legal assistance.
      </p>

      <div className={styles.contentBlock}>
        <div className={styles.logoContainer}>
          <Link href="https://checkboxlegal.com.au" target="_blank">
            <Image
              src="/img/Logo/Logo_checkbox.png"
              alt="Checkbox Legal Logo"
              width={100}
              height={100}
              className={styles.logo}
            />
          </Link>
        </div>

        <ul className={styles.featuresList}>
          <li><span className={styles.stars}>⭐</span> 14+ YEARS OF EXPERIENCE</li>
          <li><span className={styles.stars}>⭐</span> LEGAL ADVICE ON AUSTRALIAN LAWS</li>
          <li><span className={styles.stars}>⭐</span> SUPPORT AND GUIDANCE IN AUSTRALIA</li>
          <li><span className={styles.stars}>⭐</span> PRIORITY ACCESS TO VISA AUSTRALIA ONLINE CLIENTS</li>
        </ul>
      </div>
    </section>
  );
}
