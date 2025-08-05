import { AiChatbotFooterPropsType } from '../../type';

type ItemType = Pick<AiChatbotFooterPropsType, 'feedbackMessage' | 'activeRating' | 'chatId'>;

export interface FeedBackSectionPropsType extends ItemType {}

export type UseFeedBackPropsType = {
  chatId: string;
};
