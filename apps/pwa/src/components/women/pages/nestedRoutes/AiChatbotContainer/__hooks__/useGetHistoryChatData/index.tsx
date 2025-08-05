import { useEffect, useState } from 'react';

import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { ChatType, HistoryChatResponsiveType } from './type';

const useGetHistoryChatData = () => {
  const [aiChatbotList, setAiChatbotList] = useState<ChatType[]>([]);
  const { getQuery, newQuery } = useCustomReactQuery(['historyAiChat']);

  const { data, isLoading: historyLoading } = useApi<HistoryChatResponsiveType>({
    api: 'feature/ai/chat/list',
    queryKey: ['historyChatList'],
    method: 'GET',
  });
  const aiChatData = getQuery<HistoryChatResponsiveType>({ queryKey: ['historyAiChat'] });

  useEffect(() => {
    if (data) {
      setAiChatbotList(data.chats);
      newQuery({ queryKey: ['historyAiChat'], payload: data });
    }
  }, [data]);

  const addChatHandler = (chat: ChatType) => {
    setAiChatbotList([...aiChatbotList, chat]);
  };

  return { historyLoading, aiChatData, addChatHandler, aiChatbotList };
};

export default useGetHistoryChatData;
