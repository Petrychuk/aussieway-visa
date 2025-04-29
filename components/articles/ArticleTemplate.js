// components/articles/ArticleTemplate.js
import Image from 'next/image';
import styles from '@/styles/pages/article-template.module.css';

export default function ArticleTemplate({ frontmatter, contentHtml }) {
  const { title, date, author, image, alt } = frontmatter;

  return (
    <article className={`${styles.article} ${styles.fadeIn}`}>
      {image && (
        <div className={styles.imageWrapper}>
          <Image
            src={image}
            alt={alt || title}
            width={1200}
            height={600}
            className={styles.image}
            priority
          />
        </div>
      )}

      <div className={styles.meta}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.info}>
          <span>{author}</span> · <span>{new Date(date).toLocaleDateString('en-GB')}</span>
        </div>
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </article>
  );
}
