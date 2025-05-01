import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/layout/header.module.css';
import Checkmark from '@/components/buttons/Checkmark';
import { useState } from 'react';

export default function DropdownItem({ href, label, onClick }) {
  const [hovered, setHovered] = useState(false);
  const isExternal = href.startsWith('http');

  return (
    <motion.li
      className={styles.dropdownItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isExternal ? (
        <a
          href={href}
          onClick={onClick}
          className={styles.dropdownLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className={styles.checkmark}>
            <Checkmark visible={hovered} />
          </span>
          <span>{label}</span>
        </a>
      ) : (
        <Link href={href} onClick={onClick} className={styles.dropdownLink}>
          <span className={styles.checkmark}>
            <Checkmark visible={hovered} />
          </span>
          <span>{label}</span>
        </Link>
      )}
    </motion.li>
  );
}
