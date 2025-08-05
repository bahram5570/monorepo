import { ChatResponseTypes } from '../__hooks__/useGetData/types';

export interface ChatFooterProps extends Pick<ChatResponseTypes, 'isRate' | 'state'> {}
