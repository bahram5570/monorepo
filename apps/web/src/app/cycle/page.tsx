import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import HeaderFooterContainer from '@components/HeaderFooterContainer';
import CyclePage from '@components/pages/cycle/CyclePage';

export const metadata: Metadata = {
  title: 'ثبت نام در اپ',
  description: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/cycle`,
  },
};

const Cycle = () => {
  return (
    <HeaderFooterContainer className="!pb-0">
      <CyclePage />
    </HeaderFooterContainer>
  );
};

export default Cycle;
