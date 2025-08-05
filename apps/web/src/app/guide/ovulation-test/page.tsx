import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import OvulationTestContainer from '@components/pages/guide/OvulationTestContainer';

export const metadata: Metadata = {
  title: 'تست کیت تخمک گذاری',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/guide/ovulation-test`,
  },
};

const OvulationTest = () => {
  return <OvulationTestContainer />;
};

export default OvulationTest;
