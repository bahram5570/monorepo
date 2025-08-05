import { FeedbacksTypes } from '../../__hooks__/useGetData/types';
import { FeedbackValuesHandlerTypes } from '../__hooks__/useValues/types';

export interface RatingFeedbackProps extends FeedbacksTypes {
  feedbackValuesHandler: FeedbackValuesHandlerTypes;
  feedbackValues: FeedbackValuesTypes;
  rate: number;
}
