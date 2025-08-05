import { AiChatbotFooterPropsType } from '../type';

type ItemType = Pick<AiChatbotFooterPropsType, 'title' | 'deactiveMessage' | 'deactiveButton'>;

export interface AiChatbotDeactiveMessagePropsType extends ItemType {}
