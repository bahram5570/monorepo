import { HistoryChatResponsiveType } from '../__hooks__/useGetHistoryChatData/type';

type HeaderItemType = Pick<HistoryChatResponsiveType, 'chatTitle'>;

export interface AiChatbotHeaderPropsType extends HeaderItemType {}
