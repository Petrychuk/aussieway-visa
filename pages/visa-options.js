
import Intro from '@/components/sections/Intro';
import { getIntroContent } from '@/lib/markdown';
import VisasTypeCard from '@/components/sections/VisasTypeCard';
import SubscribeBlock from '@/components/sections/SubscribeBlock';
import localStyles from '@/styles/pages/visa-options.module.css';
import Breadcrumbs from '@/components/common/Breadcrumbs';



export default function VisaOptionsPage({ intro }) {
  return (
    <>
      <Intro {...intro} />
      <Breadcrumbs />
      <VisasTypeCard overrideClassName={localStyles.gridOverride} />
      <SubscribeBlock />
    </>
  );
}

export async function getStaticProps() {
  const intro = await getIntroContent('visa-options');
  return {
    props: { intro },
  };
}
