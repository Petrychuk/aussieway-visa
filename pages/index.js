import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent } from '@/lib/markdown';
import SeervicesCardLinks from '@/components/sections/SeervicesCardLinks';
import SetInfoBlocks from '@/components/sections/SetInfoBlocks';

export default function HomePage({ intro }) {
  return (
    <>
      <Intro {...intro} />

      <TwoColumn
        left={<SeervicesCardLinks />}
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
