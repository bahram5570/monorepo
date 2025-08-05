import { AiChatbotInputPropsType } from '../../AiChatbotFooter/AiChatbotInput/type';
import { ChatType } from '../useGetHistoryChatData/type';

export type ItemType = Pick<AiChatbotInputPropsType, 'chatId'>;
export type SuccessResponseType = {
  activeRating: boolean;
  valid: boolean;
  isActive: boolean;
  title: string;
  deactiveMessage: string;
  aiResponse: ChatType;
  deactiveButton: null | ActionTypes;
};

export interface UseSubmitPropsType extends ItemType {
  addChatHandler: (chat: ChatType) => void;
}
