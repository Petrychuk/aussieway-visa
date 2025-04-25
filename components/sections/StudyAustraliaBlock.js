import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/layout/study-australia.module.css';

export default function StudyAustraliaBlock() {
  
const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth <= 767);
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  return (
    <section className={styles.studyBlock}>
      <div className={styles.imageWrapper}>
        <Image
          src="/img/Logo/study_australia.jpg"
          alt="Study Australia"
          fill
          className={styles.image}
          priority
        />
      </div>

      <p className={styles.subtitle}>
        Watch the video below to see what studying in Australia feels like!
      </p>

      <div className={styles.videoWrapper}>
        <video controls poster="">
          <source
            src={isMobile ? '/videos/100191.mp4' : '/videos/100190-77.mp4'}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
