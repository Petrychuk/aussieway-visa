//import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent, getSliderPosts } from '@/lib/markdown';
import HeroSlider from '@/components/sections/SliderHero';
import SubscribeBlock from '@/components/sections/SubscribeBlock';

export default function VisaNewsPage({ intro, slides }) {
  return (
    <>
      <Intro {...intro} />
      <HeroSlider slides={slides} />
      <SubscribeBlock />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('visa-news');
  const slidesRaw = await getSliderPosts();
     
      // ✅ Преобразуем дату в строку (ISO format)
  const slides = slidesRaw.map((post) => ({
    ...post,
    date: typeof post.date === 'string' ? post.date : new Date(post.date).toISOString(),
  }));
  
  return {
    props: {
      intro,
      slides
    },
  };
}
