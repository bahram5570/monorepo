import { useEffect, useState } from 'react';

import { CompleteRegisterCrStepsEnum } from '../../enums';
import { UseCompleteCrRegisterStepsProps } from './types';

const useCompleteCrRegisterSteps = ({ partnerData }: UseCompleteCrRegisterStepsProps) => {
  const [step, setStep] = useState<CompleteRegisterCrStepsEnum>(CompleteRegisterCrStepsEnum.None);

  const hasPartnerData = typeof partnerData !== 'undefined';

  useEffect(() => {
    if (hasPartnerData) {
      setStep(CompleteRegisterCrStepsEnum.Partner);
    } else {
      setStep(CompleteRegisterCrStepsEnum.Loading);
    }
  }, [hasPartnerData]);

  const stepHandler = (nextStep: CompleteRegisterCrStepsEnum) => {
    setStep(nextStep);
  };

  return { step, stepHandler };
};

export default useCompleteCrRegisterSteps;
