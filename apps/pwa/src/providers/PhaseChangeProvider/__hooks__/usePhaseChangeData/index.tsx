import { useContext, useEffect } from 'react';

import { PhaseChangeContext } from '@providers/PhaseChangeProvider';

const usePhaseChangeData = () => {
  const { data } = useContext(PhaseChangeContext);

  const result = data ? { question: data.question, reward: data.reward } : undefined;

  return result;
};

export default usePhaseChangeData;
