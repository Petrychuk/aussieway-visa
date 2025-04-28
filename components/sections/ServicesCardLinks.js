// components/sections/ServicesLinks.js
import CardLink from '@/components/buttons/CardLink';
import styles from '@/styles/layout/services-links.module.css';
import { useRouter } from 'next/router';

export default function ServicesLinks() {
  const router = useRouter();
  const isBookConsultationPage = router.pathname === '/book-consultation';

  return (
    <section className={styles.servicesLinksSection}>
      <div className={`${styles.grid} ${isBookConsultationPage ? styles.gridLine : ''}`}>
        <CardLink
          title="Visa News"
          image="/img/buttons/visa_news_531x342.jpg"
          href="/visa-news"
        />
        <CardLink
          title="Visa Options"
          image="/img/buttons/visa_options_531x342.jpg"
          href="/visa-options"
        />
        <CardLink
          title="Our Services"
          image="/img/buttons/our_services_531x342.jpg"
          href="/our-services"
        />
        <CardLink
          title="Contact Us"
          image="/img/buttons/contact_us_2.png"
          href="/contact"
        />
      </div>
    </section>
  );
}

