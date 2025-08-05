import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import ResumePage from '@components/pages/careers/ResumePage';

export const metadata: Metadata = {
  title: 'فرصت های شغلی ایمپو',
  description: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/careers`,
  },
};

const Resume = () => {
  return <ResumePage />;
};

export default Resume;
