import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/layout/article-preview.module.css';

export default function ArticlePreview({ post }) {
  const { image, alt, title, date, author, description, url } = post;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={alt || title}
          width={600}
          height={350}
          className={styles.image}
        />
        <span className={styles.date}>{date}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <div className={styles.meta}>
          <div className={styles.metaGroup}>
            <i className="bi bi-person"></i>
            <span>{author}</span>
          </div>
        </div>

        <p className={styles.description}>{description}</p>

        <hr className={styles.divider} />

        <Link href={`/articles/${post.url}`} className={styles.link}>
        Read More →
        </Link>
      </div>
    </article>
  );
}
