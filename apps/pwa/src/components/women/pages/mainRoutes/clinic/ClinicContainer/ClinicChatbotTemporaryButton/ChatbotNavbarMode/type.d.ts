import { ClinicChatbotTemporaryButtonPropsType } from '../type';

type ChatbotType = Pick<ClinicChatbotTemporaryButtonPropsType, 'chatbot'>['chatbot'];
type ItemType = Pick<ChatbotType, 'continueChatText' | 'collapseText1' | 'collapseText2'>;

export interface ChatbotNavbarModePropsType extends ItemType {}
