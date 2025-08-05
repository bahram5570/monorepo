export type FeedbackValuesTypes = { feedbackPositive: string[]; feedbackNegative: string[] };

export type FeedbackValuesHandlerTypes = (v: {
  name: 'feedbackNegative' | 'feedbackPositive';
  value: string[];
}) => void;
