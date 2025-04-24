import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '@/styles/layout/slider.module.css';
import Link from 'next/link';

export default function SliderCarousel({ slides }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.sliderWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1.3}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ clickable: true }}
        className={styles.swiper}
        breakpoints={{
          768: {
            slidesPerView: 1.5,
          },
          1024: {
            slidesPerView: 2.5,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div
              className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {index === activeIndex && (
                <div className={styles.content}>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <Link href={`/articles/${slide.url}`} className={styles.button}>
                    Read More
                  </Link>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <div className={`swiper-button-prev-custom ${styles.navBtn}`}></div>
      <div className={`swiper-button-next-custom ${styles.navBtn}`}></div>
    </section>
  );
}
