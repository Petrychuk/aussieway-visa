import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'animate.css';
import styles from '@/styles/layout/slider-hero.module.css';
import Link from 'next/link';

export default function HeroSlider({ slides }) {
  return (
    <section className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{ nextEl: '.next-btn', prevEl: '.prev-btn' }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        loop
        autoplay={{ delay: 15000, disableOnInteraction: false }}
        className={styles.swiper}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className={styles.overlay}>
                <div className={`animate__animated animate__fadeInUp ${styles.content}`}>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <Link href={`/articles/${slide.url}`} className={styles.button}>
                    Read More
                  </Link>
                </div>
              </div>
              <div className={styles.controlsBottom}>
                <div className={`prev-btn ${styles.navBtn}`}></div>
                <div className={`next-btn ${styles.navBtn}`}></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
