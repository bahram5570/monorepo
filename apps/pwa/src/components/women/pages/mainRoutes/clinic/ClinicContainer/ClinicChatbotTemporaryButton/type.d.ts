import { UseGetConfigAiTypes } from '../__hooks__/useGetConfigAi/type';
import { ClinicResponseTypes } from '../__hooks__/useGetData/types';

type ItemType = Pick<
  UseGetConfigAiTypes,
  | 'collapseText1'
  | 'collapseText2'
  | 'continueChatText'
  | 'description'
  | 'startChatText'
  | 'title'
  | 'isAvailable'
  | 'username'
>;

type ChatbotItem = {
  chatbot: ItemType;
};

export interface ClinicChatbotTemporaryButtonPropsType extends ChatbotItem {
  onChangeValueHandler: (value: number) => void;
}

type ContextSlideType = { text: string };
