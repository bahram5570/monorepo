import { ChatResponseTypes } from '../../__hooks__/useGetData/type';

export interface ChatFooterProps extends Pick<ChatResponseTypes, 'isRate' | 'status' | 'rateDescription'> {}
