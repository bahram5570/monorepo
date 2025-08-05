import { useState } from 'react';

import { FeedbackValuesHandlerTypes, FeedbackValuesTypes } from './types';

const useValues = () => {
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState('');
  const [feedbackValues, setFeedbackValues] = useState<FeedbackValuesTypes>({
    feedbackPositive: [],
    feedbackNegative: [],
  });

  const rateHandler = (v: number) => {
    setRate(v);
  };

  const descriptionHandler = (v: string) => {
    setDescription(v);
  };

  const feedbackValuesHandler: FeedbackValuesHandlerTypes = (v) => {
    setFeedbackValues({ ...feedbackValues, [v.name]: v.value });
  };

  return { rate, rateHandler, description, descriptionHandler, feedbackValues, feedbackValuesHandler };
};

export default useValues;
