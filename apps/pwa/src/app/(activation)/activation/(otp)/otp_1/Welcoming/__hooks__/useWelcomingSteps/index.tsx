import { useState } from 'react';

import useFinish from '../useFinish';
import useIcon from '../useIcon';
import useStart from '../useStart';
import useTitles from '../useTitles';
import { StepsList } from './constants';
import { onCompleteType } from './types';

const useWelcomingSteps = (onComplete?: onCompleteType) => {
  const [steps, setSteps] = useState(StepsList.FINISH);

  useStart((v) => setSteps(v));
  useIcon({ steps, onSteps: (v) => setSteps(v) });
  useTitles({ steps, onSteps: (v) => setSteps(v) });
  useFinish({ steps, onSteps: (v) => setSteps(v), onComplete });

  return { steps };
};

export default useWelcomingSteps;
