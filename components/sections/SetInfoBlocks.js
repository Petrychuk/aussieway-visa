// components/sections/SetInfoBlocks.js
import InfoBlock from '@/components/layout/InfoBlock';
import styles from '@/styles/layout/set-info-blocks.module.css';

export default function SetInfoBlocks() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <InfoBlock
          title="Studying in Australia"
          text="Australia is home to some of the best universities in the world. Here’s why studying here is a great idea:"
          list={[
            { title: "Top Universities", description: "Australia has many highly ranked universities." },
            { title: "Diverse Culture", description: "You will meet people from all over the world." },
            { title: "Post-Study Work", description: "You may be able to work in Australia to gain experience." }
          ]}
          links={[
            { label: "more information on studying in Australia", href: "/student-visas" },
            { label: "book a consultation", href: "/book-consultation" }
          ]}
        />
        <InfoBlock
          title="Working in Australia"
          text="Australia has a strong economy with many job opportunities. Here is what you need to know:"
          list={[
            { title: "Jobs", description: "There are jobs available in healthcare, IT, engineering, and more." },
            { title: "Work-Life Balance", description: "Australians enjoy a good balance between work and leisure." },
            { title: "Great Work Opportunities", description: "The average salary in Australia was $1,888.80 per week in 2023 (ABS)." }
          ]}
          links={[
            { label: "more information on working in Australia", href: "/work-visas" },
            { label: "book a consultation", href: "/book-consultation" }
          ]}
        />
        <InfoBlock
          title="Living in Australia"
          text="Living in Australia is about enjoying a high quality of life in a beautiful environment. Here’s what makes it special:"
          list={[
            { title: "Great Quality of Life", description: "Australia has excellent healthcare, education, and living conditions." },
            { title: "Safe and Friendly", description: "It is a safe country with friendly people." },
            { title: "Beautiful Nature", description: "Australia has stunning beaches, forests, and wildlife." }
          ]}
          links={[
            { label: "what it is like living in Australia", href: "/regional-visas" },
            { label: "contact us", href: "/contact" }
          ]}
        />
      </div>
    </section>
  );
}
