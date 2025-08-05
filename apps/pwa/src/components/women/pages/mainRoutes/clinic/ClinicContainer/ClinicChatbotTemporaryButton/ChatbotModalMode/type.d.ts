import { ClinicChatbotTemporaryButtonPropsType } from '../type';

type ChatbotType = Pick<ClinicChatbotTemporaryButtonPropsType, 'chatbot'>['chatbot'];
type ItemType = Pick<ChatbotType, 'title' | 'description' | 'startChatText'>;

export interface ChatbotModalModePropsType extends ItemType {}
