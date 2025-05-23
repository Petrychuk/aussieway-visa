import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent } from '@/lib/markdown';
import ServicesCardLinks from '@/components/sections/ServicesCardLinks';
import SubscribeBlock from '@/components/sections/SubscribeBlock';
import CalendlyWidget from '@/components/sections/CalendlyWidget';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export default function BookConsultationPage({ intro }) {
  return (
    <>
      <Intro {...intro} /> 
      <Breadcrumbs />
      <CalendlyWidget />  
      <ServicesCardLinks />
      <SubscribeBlock />
      </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('book-consultation');
  return {
    props: { intro },
  };
}
