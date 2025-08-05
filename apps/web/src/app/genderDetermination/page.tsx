import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import GenderDeterminationPage from '@components/pages/genderDetermination/GenderDeterminationPage';

export const metadata: Metadata = {
  title: 'تعیین جنسیت',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/genderDetermination`,
  },
};

const GenderDetermination = () => {
  return <GenderDeterminationPage />;
};

export default GenderDetermination;
