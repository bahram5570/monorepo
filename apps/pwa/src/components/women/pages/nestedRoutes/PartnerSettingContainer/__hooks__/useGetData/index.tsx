import useApi from '@hooks/useApi';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const { isLoading, data } = useApi<ResponsePropsType>({
    method: 'GET',
    queryKey: ['partnerSection'],
    api: 'partner',
  });

  return { isLoading, data };
};

export default useGetData;
