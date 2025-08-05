import { PregnancyTestOnlineGoalEnum } from './enums';

type StepsNames = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11';

export type PregnancyTestOnlineQuestionTypes = {
  step: number;
  title: string;
  items: { title: string; message: string; score: number; goal?: PregnancyTestOnlineGoalEnum }[];
};

export type PregnancyTestOnlineQuestionListTypes = {
  [key in StepsNames]: PregnancyTestOnlineQuestionTypes;
};

export type PregnancyTestOnlineSessionTypes = { [key in keyof PregnancyTestOnlineQuestionListTypes]: number };

export type PregnancyTestOnlineResultsTypes = {
  [PregnancyTestOnlineGoalEnum.Intention]: {
    title: string;
    message: string;
  };
  [PregnancyTestOnlineGoalEnum.Prevention]: {
    title: string;
    message: string;
  };
};

export type PregnancyTestOnlineResultListTypes = {
  result1: PregnancyTestOnlineResultsTypes;
  result2: PregnancyTestOnlineResultsTypes;
  result3: PregnancyTestOnlineResultsTypes;
};
