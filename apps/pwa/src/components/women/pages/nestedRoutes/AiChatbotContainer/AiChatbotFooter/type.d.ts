import { ChatType, HistoryChatResponsiveType } from '../__hooks__/useGetHistoryChatData/type';

export type FooterItemType = Pick<
  HistoryChatResponsiveType,
  | 'activeRating'
  | 'deactiveMessage'
  | 'feedbackMessage'
  | 'hintPromptText'
  | 'isActive'
  | 'chatId'
  | 'title'
  | 'valid'
  | 'deactiveButton'
>;

export interface AiChatbotFooterPropsType extends FooterItemType {
  submitHandler: (text: string) => void;
  isLoading: boolean;
}
