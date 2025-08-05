import { useState } from 'react';

import useFadeIn from '../useFadeIn';
import useFadeOut from '../useFadeOut';
import useFinish from '../useFinish';
import useStart from '../useStart';
import { StepsList } from './constants';

const useWelcomingSteps = () => {
  const [steps, setSteps] = useState(StepsList.FINISH);

  useStart((v) => setSteps(v));
  useFadeIn({ steps, onSteps: (v) => setSteps(v) });
  useFadeOut({ steps, onSteps: (v) => setSteps(v) });
  useFinish({ steps, onSteps: (v) => setSteps(v) });

  return { steps };
};

export default useWelcomingSteps;
