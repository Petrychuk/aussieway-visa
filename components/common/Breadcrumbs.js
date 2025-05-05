import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/layout/breadcrumbs.module.css';

export default function Breadcrumbs() {
  const router = useRouter();

  // Используем asPath вместо pathname, чтобы получить реальный URL
  const pathSegments = router.asPath.split('?')[0].split('/').filter(Boolean); // убираем query-параметры
  const lastSegment = pathSegments[pathSegments.length - 1];

  const getHref = (index) => {
    const segment = pathSegments[index];
    // Подменяем articles → visa-news
    if (segment === 'articles') return '/visa-news';
    return '/' + pathSegments.slice(0, index + 1).join('/');
  };

  return (
    <nav className={styles.breadcrumbs}>
      <Link href="/">Home</Link>
      {pathSegments.map((segment, index) => {
        const isLast = index === pathSegments.length - 1;
        const displayName = segment === 'articles'
          ? 'Articles'
          : decodeURIComponent(segment).replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
        const href = getHref(index);

        return (
          <span key={href}>
            {' / '}
            {isLast ? (
              <span>{displayName}</span>
            ) : (
              <Link href={href}>{displayName}</Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
