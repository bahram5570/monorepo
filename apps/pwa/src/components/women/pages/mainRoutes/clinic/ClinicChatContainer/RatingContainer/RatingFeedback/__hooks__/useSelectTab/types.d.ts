import { RatingFeedbackProps } from '../../types';

export interface UseSelectTabProps extends Pick<RatingFeedbackProps, 'rate'> {}

export type TabTypes = 'positive' | 'negative';
