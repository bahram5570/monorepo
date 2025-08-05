import { useContext } from 'react';

import { ActivationContext } from '@providers/__activation__/ActivationProvider';

const useActivationData = () => {
  const { data } = useContext(ActivationContext);
  const result = data ? { question: data.question, reward: data.reward } : undefined;

  return result;
};

export default useActivationData;
