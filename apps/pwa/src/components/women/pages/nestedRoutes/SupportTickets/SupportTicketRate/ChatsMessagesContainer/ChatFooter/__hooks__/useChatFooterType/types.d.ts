import { ChatFooterProps } from '../../types';

type FooterType = Pick<ChatFooterProps, 'isRate' | 'status'>;

export interface UseChatFooterTypeProps extends FooterType {}

export type ChatFooterTypeTypes = null | 'chatMessageInput' | 'rating' | 'rated';
