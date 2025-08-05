import useTimer from '@hooks/useTimer';

import { useEffect, useState } from 'react';

const useSteps = (totalSteps: number) => {
  const [step, setStep] = useState(0);

  const stepHandler = () => {
    if (step < totalSteps) {
      setStep((state) => state + 1);
    } else {
      setStep(0);
    }
  };

  const { startTimer } = useTimer(2, stepHandler);

  useEffect(() => {
    startTimer();
  }, [step]);

  return { step };
};

export default useSteps;
