import useApi from '@hooks/useApi';

import { EditActivationResponseTypes } from './types';

const useGetData = () => {
  const { isLoading, data } = useApi<EditActivationResponseTypes>({
    method: 'GET',
    queryKey: ['editActivation'],
    api: 'profile/woman/activation/questions',
  });

  return { isLoading, data };
};

export default useGetData;
