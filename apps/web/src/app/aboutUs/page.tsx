import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import AboutUsContainer from '@components/pages/aboutUs/AboutUsContainer';

export const metadata: Metadata = {
  title: 'درباره ما',
  description: 'ایمپو | درباره‌ما',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/aboutUs`,
  },
};
const AboutUs = () => {
  return <AboutUsContainer />;
};

export default AboutUs;
