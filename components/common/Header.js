'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import DropdownItem from '@/components/buttons/DropdownItem';
import useIsDesktop from '@/hooks/useIsDesktop';
import styles from '@/styles/layout/header.module.css';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);
  const isDesktop = useIsDesktop();

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
  setActiveDropdown((prev) => (prev === menu ? null : menu));
};


  const handleDropdownLinkClick = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
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

        {/* Навигация */}
        <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navActive : ''}`}>
          <ul className={styles.menu}>
            <li
              className={styles.dropdown}
              onMouseEnter={() => isDesktop && handleDropdownEnter('visa')}
              onMouseLeave={() => isDesktop && handleDropdownLeave()}
              onClick={() => !isDesktop && handleMobileDropdownToggle('visa')}
            >
              <span className={styles.link}>
                Visa Options{' '}
                <span className={`${styles.arrow} ${activeDropdown === 'visa' ? styles.arrowUp : ''}`}>▼</span>
              </span>
              {activeDropdown === 'visa' && (
                <ul className={`${styles.dropdownMenu} ${activeDropdown === 'visa' ? styles.show : ''}`}>

                  <DropdownItem href="/skilled-visa" label="Skilled Visa" onClick={handleDropdownLinkClick} />
                  <DropdownItem href="/family-visa" label="Family Visa" onClick={handleDropdownLinkClick} />
                  <DropdownItem href="/student-visa" label="Student Visa" onClick={handleDropdownLinkClick} />
                  <DropdownItem href="/business-visa" label="Business Visa" onClick={handleDropdownLinkClick} />
                  <DropdownItem href="/visitor-visa" label="Visitor Visa" onClick={handleDropdownLinkClick} />
                  <DropdownItem href="/regional-visa" label="Regional Visa" onClick={handleDropdownLinkClick} />
                  <DropdownItem href="/work-visa" label="Work Visa" onClick={handleDropdownLinkClick} />
                </ul>
              )}
            </li>
            <li>
              <Link href="/visa-news" onClick={handleDropdownLinkClick}>Visa News</Link>
            </li>
            <li>
              <Link href="/our-services" onClick={handleDropdownLinkClick}>Our Services</Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleDropdownLinkClick}>Contact Us</Link>
            </li>
            <li
              className={styles.dropdown}
              onMouseEnter={() => isDesktop && handleDropdownEnter('partner')}
              onMouseLeave={() => isDesktop && handleDropdownLeave()}
              onClick={() => !isDesktop && handleMobileDropdownToggle('partner')}
            >
              <span className={styles.link}>
                Partnered With{' '}
                <span className={`${styles.arrow} ${activeDropdown === 'partner' ? styles.arrowUp : ''}`}>▼</span>
              </span>
              {activeDropdown === 'partner' && (
                <ul className={`${styles.dropdownMenu} ${activeDropdown === 'partner' ? styles.show : ''}`}>
                  <DropdownItem
                    href="https://checkboxlegal.com.au/"
                    label="Checkbox Legal"
                    onClick={handleDropdownLinkClick}
                  />
                  <DropdownItem
                    href="https://flatfeeconveyancing.com.au/"
                    label="Flat Fee Conveyancing"
                    onClick={handleDropdownLinkClick}
                  />
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Кнопка на десктопе */}
        <div className={styles.desktopButton}>
          <Link href="/book-consultation" className={styles.button}>
            <i className="bi bi-headset"></i> Book Consultation
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
      </div>
    </header>
  );
}
