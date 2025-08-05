import { useRouter, useSearchParams } from 'next/navigation';

import { useEffect, useState } from 'react';

import { STEP_LIST, STEP_PARAM } from '../../constants';

const useStep = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const stepFromQuery = Number(searchParams.get(STEP_PARAM)) || 0;
  const [currentStep, setCurrentStep] = useState(stepFromQuery);

  const nextStep = () => {
    if (currentStep < STEP_LIST.length - 1) {
      setCurrentStep((prev: number) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev: number) => prev - 1);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(STEP_PARAM, String(currentStep));
    router.push(`?${params.toString()}`, { scroll: false });
  }, [currentStep]);

  return { nextStep, prevStep, currentStep };
};

export default useStep;
