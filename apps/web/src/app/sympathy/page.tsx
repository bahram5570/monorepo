import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import SympathyPage from '@components/pages/sympathy/SympathyPage';

export const metadata: Metadata = {
  title: 'همدلی',
  description: 'sympathy',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/sympathy`,
  },
};

const Sympathy = () => {
  return <SympathyPage />;
};

export default Sympathy;
