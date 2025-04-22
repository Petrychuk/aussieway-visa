/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/layout/header.module.css';
import DropdownItem from '@/components/buttons/DropdownItem';

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const dropdownTimeoutRef = useRef(null);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setShowDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // задержка для user-friendly UX
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Лого */}
        <div className={styles.logoWithTrail}>
            <Link href="/" className={styles.logo} aria-label="Go to homepage">
              <div className={styles.logoWrapper}>
                <Image
                  src="/img/logo/Logo_cropped.jpg"
                  alt="Visa Australia Online"
                  fill
                  className={styles.logoImg}
                  sizes="(max-width: 768px) 90px, 130px"
                />
                <img src="/img/decor/1003441.svg" alt="" className={styles.trailDecor} />
              </div>
            </Link>
          </div>

        {/* Бургер */}
        <button
            className={`${styles.burger} ${isMobileMenuOpen ? styles.open : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </button>

        {/* Навигация */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.active : ''}`}>
          <ul className={styles.menu}>
            <li
                className={styles.dropdown}
                onMouseEnter={() => {
                  if (window.innerWidth > 991) handleDropdownEnter();
                }}
                onMouseLeave={() => {
                  if (window.innerWidth > 991) handleDropdownLeave();
                }}
                onClick={() => {
                  if (window.innerWidth <= 991) setShowDropdown(!showDropdown);
                }}
              >
              <span className={styles.link}>
                Visa Options{' '}
                <span className={`${styles.arrow} ${showDropdown ? styles.arrowUp : ''}`}>▼</span>
              </span>
              {showDropdown && (
                <ul className={styles.dropdownMenu}>
                  <DropdownItem href="/skilled-visa" label="Skilled Visa" />
                  <DropdownItem href="/family-visa" label="Family Visa" />
                  <DropdownItem href="/student-visa" label="Student Visa" />
                  <DropdownItem href="/business-visa" label="Business Visa" />
                  <DropdownItem href="/visitor-visa" label="Visitor Visa" />
                  <DropdownItem href="/regional-visa" label="Regional Visa" />
                  <DropdownItem href="/work-visa" label="Work Visa" />
                </ul>
              )}
            </li>
            <li><Link href="/visa-news">Visa News</Link></li>
            <li><Link href="/our-services">Our Services</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </nav>

        {/* Кнопка — отображается только на десктопе */}
        <div className={styles.desktopButton}>
          <Link href="/book-consultation" className={styles.button}>
            <i className="bi bi-headset"></i> Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
