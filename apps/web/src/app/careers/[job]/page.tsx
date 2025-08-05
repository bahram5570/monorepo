import { HOST_URL } from '@constants/links.constants';
import { Metadata } from 'next';

import JobPage from '@components/pages/careers/JobPage';
import { JobTypes } from '@components/pages/careers/types';
import http from '@services/http';

export const metadata: Metadata = {
  title: 'فرصت های شغلی ایمپو',
  description: 'ایمپو | بزرگترین پلتفرم حوزه سلامت زنان',
  robots: { follow: false, index: false },
  alternates: {
    canonical: `${HOST_URL}/careers`,
  },
};

const Job = async (props: { params: { job: string } }) => {
  const id = props.params.job;

  const { data } = await http<JobTypes>({ method: 'GET', cache: 'no-store', url: `resume/job/${id}` });

  if (!data) {
    return <></>;
  }

  return <JobPage id={id} {...data} />;
};

export default Job;
