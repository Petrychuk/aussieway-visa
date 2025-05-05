import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent, getVisaDetails } from '@/lib/markdown';
import VisasTypeCard from '@/components/sections/VisasTypeCard';
import VisaDetails from '@/components/common/VisaDetails'; 
import MoreDetailsBlock from '@/components/common/MoreDetailsBlock';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export default function SkillVisasPage({ intro, detailsHtml }) {
  return (
    <>
      <Intro {...intro} />
      <Breadcrumbs />
      <TwoColumn
        left={<VisasTypeCard />}
        right=
             {
              <>
              <VisaDetails html={detailsHtml} />
              <MoreDetailsBlock href="https://immi.homeaffairs.gov.au/visas/working-in-australia/skill-occupation-list" />
              </>
             }
       />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('skilled-visa');
  const detailsHtml = await getVisaDetails('skilled_visa_details');

  return {
    props: {
      intro,
      detailsHtml,
    },
  };
}
