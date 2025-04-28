// components/sections/CalendlyWidget.js
import { useEffect, useState } from 'react';
import Script from 'next/script';
import styles from '@/styles/layout/calendly-widget.module.css';

export default function CalendlyWidget() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (window.Calendly) {
      setLoaded(true);
    } else {
      const interval = setInterval(() => {
        if (window.Calendly) {
          setLoaded(true);
          clearInterval(interval);
        }
      }, 100);
    }
  }, []);

  return (
    <section id="calendly" className={styles.calendlySection}>
      <div className="container" data-aos="fade-up">
        {/* Скелетон или настоящий виджет */}
        <div className={`${styles.widgetWrapper} ${loaded ? styles.fadeIn : styles.skeleton}`}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/checkboxlegal-info/personal-meeting"
            style={{ minWidth: '320px', height: '700px' }}
          ></div>
        </div>
      </div>
      
      {/* Скрипт Calendly */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </section>
  );
}
