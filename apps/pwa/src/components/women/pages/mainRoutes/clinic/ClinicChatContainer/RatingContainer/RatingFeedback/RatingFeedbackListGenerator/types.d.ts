import { FeedbackValuesHandlerTypes, FeedbackValuesTypes } from '../../__hooks__/useValues/types';
import { TabTypes } from '../__hooks__/useSelectTab/types';

export interface RatingFeedbackListGeneratorProps {
  list: string[];
  tabType: TabTypes;
  feedbackValues: FeedbackValuesTypes;
  feedbackValuesHandler: FeedbackValuesHandlerTypes;
}
