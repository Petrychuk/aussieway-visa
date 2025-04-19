import Image from 'next/image';
import styles from '@/styles/pages/Home.module.css';

export default function Intro() {
  return (
    <section className={styles.intro}>
      <div className="container row">
        <div className="col-md-6">
          <h1>
            Study, Work and Live in <br />
            <span className={styles.colored}>Australia</span>
          </h1>
          <h2>Welcome to Visa Australia Online</h2>
          <p>
            Welcome to Visa Australia Online, a migration business of Sydney-based law firm Checkbox Legal...
            {/* обрезано для краткости */}
          </p>
        </div>
        <div className="col-md-6">
          <Image
            src="/uploads/home_page_531x342.jpg"
            alt="Intro image"
            width={530}
            height={342}
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
}
