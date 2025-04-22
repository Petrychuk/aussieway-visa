import CardLink from '@/components/buttons/CardLink';
import styles from '@/styles/layout/types-visa-links.module.css';

const visaLinks = [
  {
    title: 'Skilled Visa',
    href: '/skilled-visa',
    image: '/img/buttons/visa_news_531x342.jpg',
  },
  {
    title: 'Family Visa',
    href: '/family-visa',
    image: '/img/buttons/family_visa_531x342.jpg',
  },
  {
    title: 'Student Visa',
    href: '/student-visa',
    image: '/img/buttons/student_visa_531x342.jpg',
  },
  {
    title: 'Business Visa',
    href: '/business-visa',
    image: '/img/buttons/business_visa_531x342.jpg',
  },
  {
    title: 'Visitor Visa',
    href: '/visitor-visa',
    image: '/img/buttons/visitor_visa_531x342.jpg',
  },
   {
    title: 'Regional Visa',
    href: '/regional-visa',
    image: '/img/buttons/regional_visa_531x342.jpg',
  },
  {
    title: 'Work Visa',
    href: '/work-visa',
    image: '/img/buttons/work_visa_531x342.jpg',
  },
  {
    title: 'Contact Us',
    href: '/contact',
    image: '/img/buttons/contact_us_531x342.jpg',
  },
];

export default function VisasTypeCard() {
  return (
    <section className={styles.typesVisaLinks}>
      <div className={styles.grid}>
        {visaLinks.map((link) => (
          <CardLink
            key={link.href}
            title={link.title}
            image={link.image}
            href={link.href}
          />
        ))}
      </div>
    </section>
  );
}
