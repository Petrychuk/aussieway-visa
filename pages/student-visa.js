import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent, getVisaDetails } from '@/lib/markdown';
import VisasTypeCard from '@/components/sections/VisasTypeCard';
import VisaDetails from '@/components/common/VisaDetails'; 
import MoreDetailsBlock from '@/components/common/MoreDetailsBlock';
import StudyAustraliaBlock from '@/components/sections/StudyAustraliaBlock';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export default function StudentVisasPage({ intro, detailsHtml }) {
  return (
    <>
      <Intro {...intro} />
      <Breadcrumbs />
      <TwoColumn
        left={
            <>
            <VisasTypeCard />        
            <StudyAustraliaBlock /> 
            </>  
        }
        right=
             {
              <>
              <VisaDetails html={detailsHtml} />
              <MoreDetailsBlock href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing" />
              </>
             }
       />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('student-visa');
  const detailsHtml = await getVisaDetails('student_visa_details');

  return {
    props: {
      intro,
      detailsHtml,
    },
  };
}
