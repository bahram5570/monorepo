import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import Marhaam2PageContainer from '@components/pages/landing/Marham2';

export const metadata: Metadata = {
  title: 'مرهم',
  description: 'مرهم',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/marham2`,
  },
};

const Marham2 = () => {
  return <Marhaam2PageContainer />;
};

export default Marham2;
