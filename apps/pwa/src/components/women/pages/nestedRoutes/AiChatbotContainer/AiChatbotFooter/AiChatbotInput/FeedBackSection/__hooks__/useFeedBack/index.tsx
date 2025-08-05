import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { UseFeedBackPropsType } from '../../type';
import { FeedBackEnum } from './enum';

const useFeedBack = ({ chatId }: UseFeedBackPropsType) => {
  const { refetchQuery } = useCustomReactQuery();

  const onSuccess = (v: { valid: boolean }) => {
    if (v.valid) {
      refetchQuery({ queryKey: ['historyChatList'] });
    }
  };

  const { data, isLoading, callApi } = useApi({
    api: 'feature/ai/chat/rate',
    method: 'PUT',
    onSuccess: (v: { valid: boolean }) => onSuccess(v),
  });

  const feedbackHandler = (rate: FeedBackEnum) => {
    const payload = {
      chatId,
      rate,
    };
    callApi(payload);
  };

  return { feedbackHandler, isLoading, data };
};

export default useFeedBack;
