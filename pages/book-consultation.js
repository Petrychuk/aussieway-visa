import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent } from '@/lib/markdown';
import ServicesCardLinks from '@/components/sections/ServicesCardLinks';


export default function HomePage({ intro }) {
  return (
    <>
      <Intro {...intro} />   
      <ServicesCardLinks />
      </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('book-consultation');
  return {
    props: { intro },
  };
}
