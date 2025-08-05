import { useEffect } from 'react';

import { ACTIVATION_WELCOMING_PREVIEWED_NAME } from '@constants/activation.constants';
import useCountDown from '@hooks/useCountDown';

import { StepsList } from '../useWelcomingSteps/constants';
import { UseFinishProps } from './types';

const useFinish = ({ steps, onSteps }: UseFinishProps) => {
  const { startCounter: startFadingCounter } = useCountDown({
    time: 2,
    onCallBack: () => {
      onSteps(StepsList.FINISH);
      sessionStorage.setItem(ACTIVATION_WELCOMING_PREVIEWED_NAME, 'true');
    },
  });

  useEffect(() => {
    if (steps === StepsList.FADE_OUT) {
      startFadingCounter();
    }
  }, [steps]);
};

export default useFinish;
