import { useEffect } from 'react';

import { ACTIVATION_HEADING_ICON_ID } from '@components/activation/ActivationHeading/constants';
import useCountDown from '@hooks/useCountDown';

import { StepsList } from '../useWelcomingSteps/constants';
import { UseIconProps } from './types';

const useIcon = ({ steps, onSteps }: UseIconProps) => {
  const { startCounter } = useCountDown({
    time: 1,
    onCallBack: () => {
      onSteps(StepsList.SHOW_ICON);

      const iconElement = document.getElementById(ACTIVATION_HEADING_ICON_ID);

      if (iconElement) {
        iconElement.style.opacity = '1';
        iconElement.style.transitionDuration = '1s';
      }
    },
  });

  useEffect(() => {
    if (steps === StepsList.START) {
      startCounter();
    }
  }, [steps]);
};

export default useIcon;
