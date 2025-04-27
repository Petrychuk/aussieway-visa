// components/services/VisaServiceItem.js
import styles from '@/styles/services/visa-service-item.module.css';

export default function VisaServiceItem({ title, stars, price, description }) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.leftBlock}>
          <div className={styles.checkbox}></div>

          <div className={styles.titlePriceBlock}>
            <div className={styles.title}>{title}</div>
            <div className={styles.price}>{price}</div>
          </div>
        </div>

        <div className={styles.priceBlock}>
          <div className={styles.priceRangeLabel}>Price Range</div>
          <div className={styles.stars}>{'⭐'.repeat(stars)}</div>
        </div>
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
}
