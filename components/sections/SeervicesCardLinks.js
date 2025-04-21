// components/sections/ServicesLinks.js
import CardLink from '@/components/buttons/CardLink';
import styles from '@/styles/layout/services-links.module.css';

export default function ServicesLinks() {
  return (
    <section className={styles.servicesLinksSection}>
      <div className={styles.grid}>
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
          image="/img/buttons/contact_us_531x342.jpg"
          href="/contact"
        />
      </div>
    </section>
  );
}
