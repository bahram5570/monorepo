import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import TermsContainer from '@components/pages/Terms/TermsContainer';

export const metadata: Metadata = {
  title: 'قوانین و مقررات',
  description: 'terms',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/terms`,
  },
};

const Terms = () => {
  return <TermsContainer />;
};

export default Terms;
