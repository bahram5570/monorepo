import useApi from '@hooks/useApi';
import { useParams } from 'next/navigation';

import { ChatResponseTypes } from './type';

const useGetData = () => {
  const { ticketId } = useParams();

  const { data, isLoading } = useApi<ChatResponseTypes>({
    api: `support/ticket/${ticketId}`,
    method: 'GET',
    queryKey: [`ticketDetail`],
  });

  return { data, isLoading };
};

export default useGetData;
