import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import CareersPage from '@components/pages/careers/CareersPage';
import http from '@services/http';

import { CareerOpportunitiesResponseTypes } from './types';

export const metadata: Metadata = {
  title: 'فرصت های شغلی ایمپو',
  description: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/careers`,
  },
};

const Careers = async () => {
  const { data } = await http<CareerOpportunitiesResponseTypes>({
    method: 'GET',
    cache: 'no-store',
    url: 'resume/job/list',
  });

  const opportunities = data?.items || [];

  return <CareersPage opportunities={opportunities} />;
};

export default Careers;
