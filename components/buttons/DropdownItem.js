import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '@/styles/layout/header.module.css';
import Checkmark from '@/components/buttons/Checkmark';
import { useState } from 'react';

export default function DropdownItem({ href, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      className={styles.dropdownItem}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={href} className={styles.dropdownLink}>
        <span className={styles.checkmark}>
          <Checkmark visible={hovered} />
        </span>
        <span>{label}</span>
      </Link>
    </motion.li>
  );
}
