import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent } from '@/lib/markdown';
import VisasTypeCard from '@/components/sections/VisasTypeCard';
import SetInfoBlocks from '@/components/sections/SetInfoBlocks';


export default function SkillVisasPage({ intro }) {
  return (
    <>
      <Intro {...intro} />

      <TwoColumn
        left={
        <>
          <VisasTypeCard />
        </>
        }
        right={<SetInfoBlocks />}
      />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('skilled_visa');
  return {
    props: { intro },
  };
}
