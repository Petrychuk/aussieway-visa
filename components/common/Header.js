/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/layout/header.module.css';
import DropdownItem from '@/components/buttons/DropdownItem';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownTimeoutRef = useRef(null);

  const handleDropdownEnter = (menu) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleMobileDropdownToggle = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
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
              onMouseEnter={() => window.innerWidth > 991 && handleDropdownEnter('visa')}
              onMouseLeave={() => window.innerWidth > 991 && handleDropdownLeave()}
              onClick={() => window.innerWidth <= 991 && handleMobileDropdownToggle('visa')}
            >
              <span className={styles.link}>
                Visa Options{' '}
                <span className={`${styles.arrow} ${activeDropdown === 'visa' ? styles.arrowUp : ''}`}>▼</span>
              </span>
              {activeDropdown === 'visa' && (
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
            <li
              className={styles.dropdown}
              onMouseEnter={() => window.innerWidth > 991 && handleDropdownEnter('partner')}
              onMouseLeave={() => window.innerWidth > 991 && handleDropdownLeave()}
              onClick={() => window.innerWidth <= 991 && handleMobileDropdownToggle('partner')}
            >
              <span className={styles.link}>
                Partnered With{' '}
                <span className={`${styles.arrow} ${activeDropdown === 'partner' ? styles.arrowUp : ''}`}>▼</span>
              </span>
              {activeDropdown === 'partner' && (
                <ul className={styles.dropdownMenu}>
                  <DropdownItem href="https://checkboxlegal.com.au/" label="Checkbox Legal" />
                  <DropdownItem href="https://flatfeeconveyancing.com.au/" label="Flat Fee Conveyancing" />
                </ul>
              )}
            </li>
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
