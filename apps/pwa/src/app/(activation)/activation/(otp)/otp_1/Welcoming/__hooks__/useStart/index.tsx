import { useEffect } from 'react';

import {
  ACTIVATION_HEADING_ICON_ID,
  ACTIVATION_HEADING_SCRIPTS_ID,
  ACTIVATION_INPUT_MODULE_ID,
} from '@components/activation/ActivationHeading/constants';
import { ACTIVATION_WELCOMING_PREVIEWED_NAME } from '@constants/activation.constants';
import { ACTIVATION_SECTION_1_NAME } from '@providers/__activation__/ActivationProvider/__constants__/activationContants';

import { StepsList } from '../useWelcomingSteps/constants';
import { UseStartTypes } from './types';

const useStart: UseStartTypes = (onStart) => {
  useEffect(() => {
    const hasSection1 = sessionStorage.getItem(ACTIVATION_SECTION_1_NAME);
    const isWelcomingPreviewed = sessionStorage.getItem(ACTIVATION_WELCOMING_PREVIEWED_NAME);

    if (!hasSection1 && !isWelcomingPreviewed) {
      onStart(StepsList.START);

      const iconElement = document.getElementById(ACTIVATION_HEADING_ICON_ID);
      if (iconElement) {
        iconElement.style.transform = 'translateY(200px) scale(1.3)';
        iconElement.style.transitionDuration = '0s';
        iconElement.style.opacity = '0';
      }

      const scriptsElements = document.querySelectorAll(
        `[id=${ACTIVATION_HEADING_SCRIPTS_ID}]`,
      ) as NodeListOf<HTMLDivElement>;
      if (scriptsElements) {
        scriptsElements.forEach((el) => {
          el.style.transform = 'translateY(200px) scale(0)';
          el.style.transitionDuration = '0s';
        });
      }

      const inputElement = document.getElementById(ACTIVATION_INPUT_MODULE_ID);
      if (inputElement) {
        inputElement.style.transform = 'scale(0)';
      }
    }
  }, []);
};

export default useStart;
