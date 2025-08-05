import useApi from '@hooks/useApi';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ChatResponseTypes } from './types';

const useGetData = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const ticketId = getQueryParams('ticketId');

  const { isLoading, data } = useApi<ChatResponseTypes>({
    method: 'GET',
    queryKey: ['chats'],
    api: `advice/ticket/${ticketId}`,
  });

  return { isLoading, data };
};

export default useGetData;
