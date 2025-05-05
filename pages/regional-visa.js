import TwoColumn from '@/components/layout/TwoColumn';
import Intro from '@/components/sections/Intro';
import { getIntroContent, getVisaDetails } from '@/lib/markdown';
import VisasTypeCard from '@/components/sections/VisasTypeCard';
import VisaDetails from '@/components/common/VisaDetails'; 
import MoreDetailsBlock from '@/components/common/MoreDetailsBlock';
import Breadcrumbs from '@/components/common/Breadcrumbs';

export default function RegionalVisasPage({ intro, detailsHtml }) {
  return (
    <>
      <Intro {...intro} />
      <Breadcrumbs />
      <TwoColumn
        left={
            <>
            <VisasTypeCard />
            <MoreDetailsBlock href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listingt" />     
            </>
        }
        right=
             {
              <>
              <VisaDetails html={detailsHtml} />
              </>
             }
       />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('regional-visa');
  const detailsHtml = await getVisaDetails('regional_visa_details');

  return {
    props: {
      intro,
      detailsHtml,
    },
  };
}
