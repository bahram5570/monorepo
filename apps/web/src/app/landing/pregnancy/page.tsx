import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import LandingPregnancyContainer from '@components/pages/landing/pregnancy/LandingPregnancyContainer';

export const metadata: Metadata = {
  title: 'ایمپو؛ تخصصی‌ترین اپلیکیشن بارداری هفته به هفته',
  description: 'تست بارداری',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/pregnancy`,
  },
};

const Pregnancy = () => {
  return <LandingPregnancyContainer />;
};

export default Pregnancy;
