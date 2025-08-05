import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { PREGNANCY_TEST_ONLINE_QUESTION_LIST, PREGNANCY_TEST_ONLINE_STEP_QUERY_NAME } from '../../constants';
import { PregnancyTestOnlineQuestionListTypes } from '../../types';

const useTestOnlineSteps = () => {
  const { getQueryParams } = useQueryParamsHandler();

  const queryStep = getQueryParams(PREGNANCY_TEST_ONLINE_STEP_QUERY_NAME) || '0';
  const currentStep = queryStep as keyof PregnancyTestOnlineQuestionListTypes;
  const data = PREGNANCY_TEST_ONLINE_QUESTION_LIST[currentStep];

  return { currentStep, data };
};

export default useTestOnlineSteps;
