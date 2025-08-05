import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import JaanPanahPage from '@components/pages/landing/JaanPanahPage';

export const metadata: Metadata = {
  title: 'جان پناه',
  description: 'جان پناه',
  robots: 'index, follow',
  alternates: {
    canonical: `${HOST_URL}/landing/jaan-panah`,
  },
};

const JaanPanah = () => {
  return <JaanPanahPage />;
};

export default JaanPanah;
