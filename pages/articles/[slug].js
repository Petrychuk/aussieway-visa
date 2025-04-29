import { getSliderPosts, getSinglePost } from '@/lib/markdown';
import ArticleTemplate from '@/components/articles/ArticleTemplate';
import ArticleSidebar from '@/components/articles/ArticleSidebar';
import Head from 'next/head'; // для метатегов
import styles from '@/styles/pages/article-page.module.css';

export async function getStaticPaths() {
  const posts = await getSliderPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.url },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const { frontmatter, contentHtml } = await getSinglePost(slug);
  
  const rawRecentPosts = await getSliderPosts();
  
  const recentPosts = rawRecentPosts.map((post) => ({
  ...post,
  date: typeof post.date === 'string'
    ? post.date
    : new Date(post.date).toISOString(),
}));

  const authorData = {
    name: 'Jane Smith',
    image: '/img/blog-author.jpg',
    bio: 'Passionate writer and tech enthusiast sharing ideas and stories.',
  };

  return {
    props: {
      frontmatter,
      contentHtml,
      authorData,
      recentPosts,
    },
  };
}

export default function SinglePost({ frontmatter, contentHtml, authorData, recentPosts }) {
  const { title, description, keywords } = frontmatter;

  return (
    <>
      {/* Мета-теги */}
      <Head>
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
      </Head>

      {/* Контент */}
      <main className={styles.main}>
        <div className={styles.container}>
          <ArticleTemplate frontmatter={frontmatter} contentHtml={contentHtml} />
          <ArticleSidebar authorData={authorData} recentPosts={recentPosts} />
        </div>
      </main>
    </>
  );
}
