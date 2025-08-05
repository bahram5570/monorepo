import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import KitGuideContainer from '@components/pages/kitGuide/KitGuideContainer';

export const metadata: Metadata = {
  title: 'راهنمای کیت تخمک گذاری',
  description: 'ایمپو',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/kitGuide`,
  },
};

const kitGuid = () => {
  return <KitGuideContainer />;
};

export default kitGuid;
