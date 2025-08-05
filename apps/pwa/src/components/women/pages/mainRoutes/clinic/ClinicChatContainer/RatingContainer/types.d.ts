import { ChatResponseTypes, FeedbacksTypes } from '../__hooks__/useGetData/types';

export interface RatingContainerProps {
  isLoading: boolean;
  feedbacks?: FeedbacksTypes;
  drName?: Pick<ChatResponseTypes, 'drName'>['drName'];
  drImage?: Pick<ChatResponseTypes, 'drImage'>['drImage'];
}
