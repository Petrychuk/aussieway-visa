//import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent, getSliderPosts } from '@/lib/markdown';
import HeroSlider from '@/components/sections/SliderHero';
// import Slider from '@/components/sections/Slider';

export default function SkillVisasPage({ intro, slides }) {
  return (
    <>
      <Intro {...intro} />
      {/* <Slider slides={slides} /> */}
      <HeroSlider slides={slides} />
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
