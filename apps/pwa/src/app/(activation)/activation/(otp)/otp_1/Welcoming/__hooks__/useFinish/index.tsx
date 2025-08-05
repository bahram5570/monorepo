import { useEffect } from 'react';

import {
  ACTIVATION_HEADING_ICON_ID,
  ACTIVATION_HEADING_SCRIPTS_ID,
  ACTIVATION_INPUT_MODULE_ID,
} from '@components/activation/ActivationHeading/constants';
import { ACTIVATION_WELCOMING_PREVIEWED_NAME } from '@constants/activation.constants';
import useCountDown from '@hooks/useCountDown';

import { StepsList } from '../useWelcomingSteps/constants';
import { UseFinishProps } from './types';

const useFinish = ({ steps, onSteps, onComplete }: UseFinishProps) => {
  const { startCounter } = useCountDown({
    time: 3,
    onCallBack: () => {
      onSteps(StepsList.FINISH);

      sessionStorage.setItem(ACTIVATION_WELCOMING_PREVIEWED_NAME, 'true');

      if (onComplete) {
        onComplete();
      }

      const iconElement = document.getElementById(ACTIVATION_HEADING_ICON_ID);
      if (iconElement) {
        iconElement.style.transform = 'translateY(0) scale(1)';
      }

      const scriptsElements = document.querySelectorAll(
        `[id=${ACTIVATION_HEADING_SCRIPTS_ID}]`,
      ) as NodeListOf<HTMLDivElement>;
      if (scriptsElements) {
        scriptsElements.forEach((el) => {
          el.style.transform = 'translateY(0) scale(1)';
          el.style.transitionDuration = '1s';
        });
      }

      const inputElement = document.getElementById(ACTIVATION_INPUT_MODULE_ID);
      if (inputElement) {
        inputElement.style.transform = 'scale(1)';
      }
    },
  });

  useEffect(() => {
    if (steps === StepsList.SHOW_SUBTITLE) {
      startCounter();
    }
  }, [steps]);
};

export default useFinish;
