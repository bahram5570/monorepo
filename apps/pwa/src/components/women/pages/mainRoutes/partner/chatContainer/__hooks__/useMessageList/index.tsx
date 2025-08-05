import { useEffect, useState } from 'react';

import { ItemPropsType, ProgressPropsType } from '../useGetData/type';
import { initailProgressValue } from './constants';
import { UseMessageListPropsType } from './type';

const useMessageList = ({ data, newMessageData, submitLoading }: UseMessageListPropsType) => {
  const [messageList, setMessageList] = useState<ItemPropsType[]>([]);
  const [progressData, setProgressData] = useState<ProgressPropsType>(initailProgressValue);

  const onChangeMessageListHandler = (item: ItemPropsType) => {
    const messages = [...messageList];
    messages.push(item);
    setMessageList(messages);
  };

  useEffect(() => {
    if (data) {
      setMessageList(data.items);
      setProgressData(data.progress);
    }
  }, [data]);

  useEffect(() => {
    if (newMessageData && !submitLoading) {
      const messages = [...messageList];
      const findItem = messages.find((message) => message.id === '');
      if (findItem) {
        findItem.id = newMessageData.id;
      }
      setProgressData(newMessageData.progress);
      setMessageList(messages);
    }
  }, [newMessageData, submitLoading]);

  return { messageList, onChangeMessageListHandler, progressData };
};

export default useMessageList;
