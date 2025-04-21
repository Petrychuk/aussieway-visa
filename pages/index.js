// pages/index.js
import Intro from '@/components/common/Intro';
import { getIntroContent } from '@/lib/markdown';

export default function HomePage({ intro }) {
  return (
    <>
      <Intro {...intro} />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('home');
  return {
    props: { intro },
  };
}
