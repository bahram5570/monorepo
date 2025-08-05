import useApi from '@hooks/useApi';

import { ResponsePropsType } from './type';

const useGetData = () => {
  const { data, isLoading } = useApi<ResponsePropsType>({
    api: 'support/tickets/0/1000',
    method: 'GET',
    queryKey: ['ticketHistory'],
  });
  return { data, isLoading };
};

export default useGetData;
