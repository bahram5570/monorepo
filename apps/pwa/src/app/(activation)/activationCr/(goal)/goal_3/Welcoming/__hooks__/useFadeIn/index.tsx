import { useEffect } from 'react';

import { StepsList } from '../useWelcomingSteps/constants';
import { useFadeInProps } from './types';

const useFadeIn = ({ steps, onSteps }: useFadeInProps) => {
  useEffect(() => {
    if (steps === StepsList.START) {
      onSteps(StepsList.FADE_IN);
    }
  }, [steps]);
};

export default useFadeIn;
