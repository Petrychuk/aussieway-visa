import SectionTitle from '@/components/services/SectionTitle';
import VisaServiceItem from '@/components/services/VisaServiceItem';
import styles from '@/styles/services/visa-services-list.module.css';

export default function VisaServicesList({ services }) {
  return (
    <section className={styles.servicesSection}>
      <SectionTitle title="Visa Services" />
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <VisaServiceItem
            key={index}
            title={service.title}
            stars={service.stars}
            price={service.price}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

