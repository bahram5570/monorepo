import useApi from '@hooks/useApi';
import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { RoleEnum } from '../useGetHistoryChatData/enum';
import { HistoryChatResponsiveType } from '../useGetHistoryChatData/type';
import { SuccessResponseType, UseSubmitPropsType } from './type';

const useSubmit = ({ chatId, addChatHandler }: UseSubmitPropsType) => {
  const { getQuery, updateQuery } = useCustomReactQuery(['historyAiChat']);

  const aiChatData = getQuery<HistoryChatResponsiveType>({ queryKey: ['historyAiChat'] });
  const successHandler = (v: SuccessResponseType) => {
    if (v.valid) {
      const aiResponse = { ...v.aiResponse, isAnswered: true };
      addChatHandler(aiResponse);
    }

    updateQuery({
      queryKey: ['historyAiChat'],
      payload: {
        ...aiChatData,
        isActive: v.isActive,
        activeRating: v.activeRating,
        deactiveMessage: v.deactiveMessage,
        title: v.title,
        valid: v.valid,
        deactiveButton: v.deactiveButton,
      },
    });
  };

  const { data, isLoading, callApi } = useApi<SuccessResponseType>({
    api: 'feature/ai/chat',
    method: 'POST',
    onSuccess: (v: SuccessResponseType) => successHandler(v),
  });

  const submitHandler = (text: string) => {
    addChatHandler({ role: RoleEnum.User, text });
    const payload = {
      chatId,
      prompt: text,
    };

    callApi(payload);
  };

  return { submitHandler, isLoading, data };
};

export default useSubmit;
