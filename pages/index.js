import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent } from '@/lib/markdown';
import ServicesCardLinks from '@/components/sections/ServicesCardLinks';
import SetInfoBlocks from '@/components/sections/SetInfoBlocks';
import Meet from '@/components/sections/Meet';

export default function HomePage({ intro }) {
  return (
    <>
      <Intro {...intro} />

      <TwoColumn
        left={
        <>
          <ServicesCardLinks />
          <Meet />
        </>
        }
        right={<SetInfoBlocks />}
      />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('home');
  return {
    props: { intro },
  };
}
