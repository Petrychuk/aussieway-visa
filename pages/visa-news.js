import ArticlePreview from '@/components/articles/ArticlePreview';
import Intro from '@/components/sections/Intro';
import { getIntroContent, getSliderPosts } from '@/lib/markdown';
import HeroSlider from '@/components/sections/SliderHero';
import SubscribeBlock from '@/components/sections/SubscribeBlock';
import styles from '@/styles/pages/visa-news.module.css';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export default function VisaNewsPage({ intro, slides }) {
  return (
    <>
      <Intro {...intro} />
      <Breadcrumbs />
      <HeroSlider slides={slides} />
      <SubscribeBlock />

      <section className={styles.gridWrapper}>
        <div className={styles.grid}>
          {slides.map((post) => (
            <ArticlePreview key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('visa-news');
  const slidesRaw = await getSliderPosts();

  const slides = slidesRaw.map((post) => ({
    ...post,
    date: post.date
  ? new Date(post.date).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    }).toUpperCase()
  : '',
  }));

  return {
    props: {
      intro,
      slides,
    },
  };
}
