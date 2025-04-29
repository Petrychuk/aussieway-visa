import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/pages/article-sidebar.module.css';

export default function ArticleSidebar({ authorData, recentPosts }) {
  const [search, setSearch] = useState('');

  const filteredPosts = recentPosts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <aside className={`${styles.sidebar} ${styles.fadeIn}`}>
      
      {/* Author */}
      <div className={styles.widget}>
        <div className={styles.author}>
          <Image
            src={authorData.image}
            alt={authorData.name}
            width={70}
            height={70}
            className={styles.avatar}
          />
          <h3>{authorData.name}</h3>
          <p>{authorData.bio}</p>
        </div>
      </div>

      {/* Search */}
      <div className={styles.widget}>
        <h4 className={styles.widgetTitle}>Search</h4>
        <form className={styles.searchForm} onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" aria-label="Search">🔍</button>
        </form>
      </div>

      {/* Recent Posts */}
      <div className={styles.widget}>
        <h4 className={styles.widgetTitle}>Recent Posts</h4>
        <ul className={styles.recentPosts}>
          {filteredPosts.slice(0, 5).map((post) => (
            <li key={post.id} className={styles.postItem}>
              <Link href={`/articles/${post.url}`} className={styles.link}>
                <Image
                  src={`/assets/uploads/${post.image}`}
                  alt={post.alt || post.title}
                  width={60}
                  height={60}
                  className={styles.thumb}
                />
                <p className={styles.title}>{post.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
