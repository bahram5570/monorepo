import { useEffect, useState } from 'react';

import { CompleteRegisterStepsEnum } from '../../enums';
import { UseCompleteRegisterStepsProps } from './types';

const useCompleteRegisterSteps = ({ accessNotificationData, partnerData }: UseCompleteRegisterStepsProps) => {
  const [step, setStep] = useState<CompleteRegisterStepsEnum>(CompleteRegisterStepsEnum.None);

  const hasAccessNotificationData = typeof accessNotificationData !== 'undefined';
  const hasPartnerData = typeof partnerData !== 'undefined';

  useEffect(() => {
    if (hasAccessNotificationData) {
      setStep(CompleteRegisterStepsEnum.AccessNotification);
    } else if (hasPartnerData) {
      setStep(CompleteRegisterStepsEnum.Partner);
    } else {
      setStep(CompleteRegisterStepsEnum.Loading);
    }
  }, [hasAccessNotificationData, hasPartnerData]);

  const stepHandler = (nextStep: CompleteRegisterStepsEnum) => {
    setStep(nextStep);
  };

  return { step, stepHandler };
};

export default useCompleteRegisterSteps;
