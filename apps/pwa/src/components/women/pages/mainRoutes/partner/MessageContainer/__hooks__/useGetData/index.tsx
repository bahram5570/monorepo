import { useState } from 'react';

import useApi from '@hooks/useApi';

import { MessageResponseType, MessageType } from './type';

const useGetData = () => {
  const [data, setData] = useState<MessageType[]>();

  const successHandler = (v: MessageResponseType) => {
    const lastTwo = v.messages.slice(-2);
    setData(lastTwo);
  };
  const { isLoading } = useApi<MessageResponseType>({
    method: 'GET',
    queryKey: ['messagePartner'],
    api: 'message',
    onSuccess: (v) => successHandler(v),
  });

  return { isLoading, data };
};

export default useGetData;
