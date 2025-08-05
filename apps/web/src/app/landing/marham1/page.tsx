import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import Marhaam1PageContainer from '@components/pages/landing/Marham1';

export const metadata: Metadata = {
  title: 'مرهم',
  description: 'مرهم',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/marham1`,
  },
};

const Marham1 = () => {
  return <Marhaam1PageContainer />;
};

export default Marham1;
