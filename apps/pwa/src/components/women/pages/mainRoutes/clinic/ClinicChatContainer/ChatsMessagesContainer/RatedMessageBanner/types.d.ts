import { ChatResponseTypes } from '../../__hooks__/useGetData/types';

export interface RatedMessageBannerProps extends Pick<ChatResponseTypes, 'rate' | 'description'> {}
