import { HistoryChatResponsiveType } from '../__hooks__/useGetHistoryChatData/type';

type ChatItem = Pick<HistoryChatResponsiveType, 'chats'>;

export interface AiChatbotMessageListPropsType extends ChatItem {
  isLoading: boolean;
}
