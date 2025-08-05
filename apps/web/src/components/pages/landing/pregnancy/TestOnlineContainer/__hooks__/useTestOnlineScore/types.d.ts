import { PregnancyTestOnlineQuestionListTypes, PregnancyTestOnlineQuestionTypes } from '../../types';

export interface UseTestOnlineScoreTypes {
  data: PregnancyTestOnlineQuestionTypes;
  currentStep: keyof PregnancyTestOnlineQuestionListTypes;
}
