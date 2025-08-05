import { useContext } from 'react';

import { ActivationCrContext } from '../..';

const useActivationCrData = () => {
  const { data } = useContext(ActivationCrContext);
  const result = data ? { question: data.question, reward: data.reward } : undefined;

  return result;
};

export default useActivationCrData;
