import useApi from '@hooks/useApi';

import { HealthReportResponseTypes } from './types';

const useGetData = () => {
  const { isLoading, data } = useApi<HealthReportResponseTypes>({
    api: 'widgets/healthreport',
    queryKey: ['healthReport'],
    method: 'GET',
  });

  return { isLoading, data };
};

export default useGetData;
