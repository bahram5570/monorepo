import useApi from '@hooks/useApi';

import { useEffect, useState } from 'react';

import { JobTypes } from '@components/pages/careers/types';

const useGetData = () => {
  const [jobId, setJobId] = useState('null');

  useEffect(() => {
    const pathnameList = location.pathname.split('/');
    const id = pathnameList[2];
    setJobId(id);
  }, []);

  const { callApi, isLoading, data } = useApi<JobTypes>({ url: `resume/job/${jobId}`, method: 'GET' });

  useEffect(() => {
    if (jobId !== 'null') {
      callApi();
    }
  }, [jobId]);

  return { jobId, data, isLoading };
};

export default useGetData;
