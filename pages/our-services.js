import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent } from '@/lib/markdown';
import ServicesCardLinks from '@/components/sections/ServicesCardLinks';
import VisaServicesList from '@/components/services/VisaServicesList';
import EligibilityAssessment from '@/components/services/EligibilityAssessment';
import ColoredButton from '@/components/services/ColoredButton';
import LegalServices from '@/components/services/LegalServices';
import VisaConditionChanges from '@/components/services/VisaConditionChanges';
import SkillsAssessment from '@/components/services/SkillsAssessment';

export default function OurServicePage({ intro }) {
  const visaServices = [
    {
      title: "Student Visa Applications",
      stars: 2,
      price: "Our fees starting from $500",
      description: "We assist with enrollment, financial documentation, and visa applications. Study in reputable schools, colleges and universities with our help.",
    },
    {
      title: "Skilled Visa Applications",
      stars: 3,
      price: "Our fees starting from  $2500",
      description: "We assist with applying for skilled worker visas. We work through eligibility, document preparation, and application submission with you. With our advice, you can increase your chances of approval.",
    },
    {
      title: "Family Visa Applications",
      stars: 3,
      price: "Our fees starting from  $3000",
      description: "We support family members who wish to join their relatives in Australia. We help you gather necessary documentation and understand relationship proof requirements, making the application submission easier.",
    },
    {
      title: "Business Visa Applications",
      stars: 4,
      price: "Our fees starting from $6000",
      description: "For entrepreneurs and investors, we offer expertise in handling business visas. We assist with business plans, financial proof, and visa applications, helping you start or invest in a business in Australia.",
    },
    {
      title: "Visitor Visa Applications",
      stars: 2,
      price: "Our fees starting from $1000",
      description: "Need a short-term visa for tourism, business trips, or family visits? We offer advice on eligibility, document preparation, and visa submission to simplify the process of obtaining a visitor visa.",
    },
  ];

  return (
    <>
      <Intro {...intro} />
      <TwoColumn
        left={
        <>
          <ServicesCardLinks />
          <VisaServicesList services={visaServices} />
        </>
        }
        right={
          <>
           <EligibilityAssessment />
           <ColoredButton
            text="Calculate Your Visa Points"
            href="https://chatgpt.com/g/g-NwUP1JmJy-checkbox-calculator-for-visas-189-190-and-491"
            color="blue"
            fullWidth
          />
           <LegalServices />
           <VisaConditionChanges />
           <SkillsAssessment />
          
          </>
        }
      />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('our-services');
  return {
    props: { intro },
  };
}
