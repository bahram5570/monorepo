import { useEffect } from 'react';

import useCountDown from '@hooks/useCountDown';

import { StepsList } from '../useWelcomingSteps/constants';
import { useFadeOutProps } from './types';

const useFadeOut = ({ steps, onSteps }: useFadeOutProps) => {
  const { startCounter: startFadingCounter } = useCountDown({
    time: 9,
    onCallBack: () => {
      onSteps(StepsList.FADE_OUT);
    },
  });

  useEffect(() => {
    if (steps === StepsList.FADE_IN) {
      startFadingCounter();
    }
  }, [steps]);
};

export default useFadeOut;
