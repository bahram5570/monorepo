import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import { useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';

import {
  PREGNANCY_TEST_ONLINE_QUESTION_LIST,
  PREGNANCY_TEST_ONLINE_STEP_QUERY_NAME,
  PREGNANCY_TEST_ONLINE_STEP_SESSION_GOAL_NAME,
  PREGNANCY_TEST_ONLINE_STEP_SESSION_SCORE_NAME,
} from '../../constants';
import { PregnancyTestOnlineSessionTypes } from '../../types';
import { UseTestOnlineScoreTypes } from './types';

const useTestOnlineScore = ({ currentStep, data }: UseTestOnlineScoreTypes) => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { newQueryParamsHandler } = useQueryParamsHandler();

  useEffect(() => {
    selectedIndexHandler(-1);
  }, [currentStep]);

  const selectedIndexHandler = (i: number) => {
    setSelectedIndex(i);
  };

  const nextStepHandler = () => {
    const storage = sessionStorage.getItem(PREGNANCY_TEST_ONLINE_STEP_SESSION_SCORE_NAME);
    const storedData = storage ? (JSON.parse(storage) as PregnancyTestOnlineSessionTypes) : null;

    let result: object = {};
    const score = data.items[selectedIndex].score;

    if (storedData) {
      result = { ...storedData, [currentStep]: score };
    } else {
      result = { [currentStep]: score };
    }

    sessionStorage.setItem(PREGNANCY_TEST_ONLINE_STEP_SESSION_SCORE_NAME, JSON.stringify(result));

    const goal = data.items[selectedIndex].goal;
    if (goal) {
      sessionStorage.setItem(PREGNANCY_TEST_ONLINE_STEP_SESSION_GOAL_NAME, JSON.stringify(goal));
    }

    navigateHandler();
  };

  const navigateHandler = () => {
    const stepsList = Object.entries(PREGNANCY_TEST_ONLINE_QUESTION_LIST);
    const lastStep = stepsList[stepsList.length - 1][0];
    const isLastStep = lastStep === currentStep;

    if (isLastStep) {
      router.push('/landing/pregnancy/result');
    } else {
      newQueryParamsHandler({ [PREGNANCY_TEST_ONLINE_STEP_QUERY_NAME]: Number(currentStep) + 1 });
    }
  };

  return { nextStepHandler, selectedIndex, selectedIndexHandler };
};

export default useTestOnlineScore;
