import { useEffect, useState } from 'react';

import { toEnglishNumbers } from '@utils/numbers';

import { INITIAL_DATA, LAST_STEP_INDEX } from './constants';
import { StepsHandlerTypes, StepsTypes, UseCodesProps } from './types';

const useCodes = ({ submitHandler, otpStatus }: UseCodesProps) => {
  const [steps, setSteps] = useState<StepsTypes>(INITIAL_DATA);

  const stepsHandler: StepsHandlerTypes = (v, stepIndex) => {
    const result: StepsTypes = [...steps];

    if (v.length <= 1) {
      result[stepIndex] = v;
      setSteps(result);
    }
  };

  const deleteHandler = () => {
    const result: StepsTypes = [...steps];
    const currentIndex = result.findIndex((i) => i === '');
    const index = currentIndex === -1 ? LAST_STEP_INDEX + 1 : currentIndex;
    result[index - 1] = '';
    setSteps(result);
  };

  useEffect(() => {
    const code = steps.join('').trim();

    if (code.length === LAST_STEP_INDEX + 1) {
      submitHandler(toEnglishNumbers(code));
    }
  }, [steps]);

  useEffect(() => {
    if (otpStatus === null) {
      setSteps(INITIAL_DATA);
    }
  }, [otpStatus]);

  return { steps, stepsHandler, deleteHandler };
};

export default useCodes;
