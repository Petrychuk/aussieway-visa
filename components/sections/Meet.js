import styles from '@/styles/layout/meet.module.css';
import Image from 'next/image';

export default function Meet() {
  return (
    <section className={styles.meetSection}>
      <div className={styles.meetBlock}>
        <h3 className={styles.title}>Meet Andre Petrov</h3>
        <div className={styles.content}>
          <div className={styles.text}>
            <p>
              <a
                href="https://www.linkedin.com/in/andre-petrov-dip-law-gdlp-b-econ-hons-2436988b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                <strong>Andre Petrov</strong>
              </a>{' '} is an Australian practicing lawyer and the founder of Checkbox Legal and Visa Australia Online. A senior lawyer based in Sydney, Andre was admitted to practice law in New South Wales and Australia in 2010, marking the beginning of his rewarding career in the legal field. Prior to establishing Checkbox Legal in 2023, Andre founded Ross Anderson Lawyers in 2012, successfully leading the firm until 2017. His journey continued as a senior lawyer at several reputable law firms in Sydney, where he honed his skills and deepened his understanding of the legal landscape.
            </p>
          </div>
          <div className={styles.photoWrapper}>
            <Image src="/img/face_AP.jpg" alt="Andre Petrov" width={150} height={200} />
          </div>
        </div>
        <p className={styles.text}>
          Andre’s diverse experience covers a wide range of practice areas, equipping him with the expertise to address complex legal challenges effectively and guide his clients along the way. Andre is a registered migration lawyer with the Australian authority for migration agents (MARA) and is happy to assist you with your visa application to Australia.
        </p>
      </div>
    </section>
  );
}
