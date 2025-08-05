import { useEffect } from 'react';

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
    }
  }, []);
};

export default useStart;
