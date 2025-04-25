import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent } from '@/lib/markdown';
import ServicesCardLinks from '@/components/sections/ServicesCardLinks';
import SetInfoBlocks from '@/components/sections/SetInfoBlocks';


export default function OurServicePage({ intro }) {
  return (
    <>
      <Intro {...intro} />

      <TwoColumn
        left={
        <>
          <ServicesCardLinks />
          
        </>
        }
        // right={<SetInfoBlocks />}
      />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('our-services');
  return {
    props: { intro },
  };
}
