import { useState } from 'react';

import { JAAN_PANAH_QUESTIONS_LIST } from '@components/pages/landing/JaanPanahPage/constants';
import { MarhaamFeelingEnum } from '@components/pages/landing/Marham1/enum';
import { MarhaamResultTypes } from '@components/pages/landing/Marham1/types';

import { StepHandlerTypes, ValuesHandlerTypes } from './types';

const initialValues: MarhaamResultTypes = {
  feeling: MarhaamFeelingEnum.Aggression,
};

const stepsList = Object.entries(JAAN_PANAH_QUESTIONS_LIST).map(
  (item) => item[0],
) as unknown as (keyof MarhaamResultTypes)[];

const useQuestions = () => {
  const [values, setValues] = useState(initialValues);

  const valuesHandler: ValuesHandlerTypes = (name, value) => {
    setValues((state) => ({ ...state, [name]: value }));
  };

  const [step, setStep] = useState<keyof MarhaamResultTypes>(stepsList[0]);

  const currentIndex = stepsList.findIndex((currentStep) => currentStep === step);
  const progressPercent = ((currentIndex + 1) * 100) / stepsList.length;

  const stepHandler: StepHandlerTypes = (isNext) => {
    if (currentIndex < 0) {
      return;
    }

    const nextStep = stepsList?.[currentIndex + 1];

    if (isNext) {
      if (nextStep) {
        setStep(nextStep);
      } else {
        // finish
      }

      return;
    }

    const previousStep = stepsList?.[currentIndex - 1];

    if (previousStep) {
      setStep(previousStep);
    }
  };

  return { values, valuesHandler, step, stepHandler, progressPercent };
};

export default useQuestions;
