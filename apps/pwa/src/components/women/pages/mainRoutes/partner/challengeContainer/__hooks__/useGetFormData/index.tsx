import useApi from '@hooks/useApi';

import { ResponsePropsType } from './type';

const useGetFormData = () => {
  const { data, isLoading } = useApi<ResponsePropsType>({
    method: 'GET',
    queryKey: ['challengeForm'],
    api: 'challenge/form',
  });

  return { data, isLoading };
};

export default useGetFormData;
