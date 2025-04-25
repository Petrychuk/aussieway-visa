import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent } from '@/lib/markdown';
import ServicesCardLinks from '@/components/sections/ServicesCardLinks';
import ContactForm from '@/components/sections/ContactForm';
import styles from '@/styles/layout/contact-form.module.css';
import SubscribeBlock from '@/components/sections/SubscribeBlock'

export default function ContactPage({ intro }) {
  return (
    <>
      <Intro {...intro} />

      <TwoColumn
        left={
        <>
          <ServicesCardLinks />        
        </>
        }
        right={
          <div className={styles.contactPage}>
      <ContactForm />
         </div>
        }
      />
      <SubscribeBlock />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('contact-page');
  return {
    props: { intro },
  };
}
