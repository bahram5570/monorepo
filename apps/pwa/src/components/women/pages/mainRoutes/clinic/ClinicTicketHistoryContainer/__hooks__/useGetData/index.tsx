import useApi from '@hooks/useApi';

import { TicketsHistoryResponseTypes } from './types';

const useGetData = () => {
  const { isLoading, data } = useApi<TicketsHistoryResponseTypes>({
    method: 'GET',
    queryKey: ['ticketsHistory'],
    api: 'advice/tickets/0/10000/-1',
  });

  return { isLoading, data };
};

export default useGetData;
