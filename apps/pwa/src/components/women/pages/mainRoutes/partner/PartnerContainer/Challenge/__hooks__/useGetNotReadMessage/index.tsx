import useApi from '@hooks/useApi';

import { NotReadResponseType } from './type';

const useGetNotReadMessage = ({ valid }: { valid: boolean }) => {
  const { isLoading, data: MessageNumber } = useApi<NotReadResponseType>({
    method: 'GET',
    queryKey: ['messageNotRead'],
    api: 'message/notread',
    fetchOnMount: valid,
  });

  return { isLoading, MessageNumber };
};

export default useGetNotReadMessage;
