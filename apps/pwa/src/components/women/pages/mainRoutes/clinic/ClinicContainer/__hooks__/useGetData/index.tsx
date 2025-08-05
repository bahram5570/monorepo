import useApi from '@hooks/useApi';

import { ClinicResponseTypes } from './types';

const useGetData = () => {
  const { data, isLoading } = useApi<ClinicResponseTypes>({
    api: 'advice/newclinicv1',
    queryKey: ['clinic'],
    method: 'GET',
  });

  return { isLoading, data };
};

export default useGetData;
