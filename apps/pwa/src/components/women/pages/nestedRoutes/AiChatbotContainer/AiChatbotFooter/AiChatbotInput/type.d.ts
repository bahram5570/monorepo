import { AiChatbotFooterPropsType } from '../type';

type InputItemType = Pick<AiChatbotFooterPropsType, 'submitHandler' | 'hintPromptText' | 'isLoading'>;

export interface AiChatbotInputPropsType extends InputItemType {}
