import { ClinicChatbotTemporaryButtonPropsType } from '../type';

export type ItemType = Pick<ClinicChatbotTemporaryButtonPropsType, 'chatbot'>['chatbot'];
export type TextType = Pick<ItemType, 'collapseText1' | 'collapseText2'>;

export interface TypingLoopPropsType extends TextType {}
