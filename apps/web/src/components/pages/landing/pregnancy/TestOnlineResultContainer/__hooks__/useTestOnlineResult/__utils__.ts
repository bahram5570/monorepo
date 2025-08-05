import {
  PREGNANCY_TEST_ONLINE_RESULTS_LIST,
  PREGNANCY_TEST_ONLINE_STEP_SESSION_GOAL_NAME,
  PREGNANCY_TEST_ONLINE_STEP_SESSION_SCORE_NAME,
} from '../../../TestOnlineContainer/constants';
import { PregnancyTestOnlineGoalEnum } from '../../../TestOnlineContainer/enums';
import { PregnancyTestOnlineSessionTypes } from '../../../TestOnlineContainer/types';

const getTotalScore = () => {
  let totalScore = 0;
  const scoreSession = sessionStorage.getItem(PREGNANCY_TEST_ONLINE_STEP_SESSION_SCORE_NAME);

  if (scoreSession) {
    const scoreSessionData = JSON.parse(scoreSession) as PregnancyTestOnlineSessionTypes;
    const scoresList = Object.entries(scoreSessionData);

    scoresList.forEach((item) => {
      totalScore = totalScore + Number(item[1]);
    });
  }

  return totalScore;
};

const getTestGoal = () => {
  let goal: null | PregnancyTestOnlineGoalEnum = null;
  const goalSession = sessionStorage.getItem(PREGNANCY_TEST_ONLINE_STEP_SESSION_GOAL_NAME);

  if (goalSession) {
    const goalSessionData = JSON.parse(goalSession) as PregnancyTestOnlineGoalEnum;
    goal = goalSessionData;
  }

  return goal;
};

export const handleResutl = () => {
  const goal = getTestGoal();
  const totalScore = getTotalScore();

  if (totalScore && goal) {
    if (totalScore > 185) {
      return PREGNANCY_TEST_ONLINE_RESULTS_LIST.result1[goal];
    }

    if (totalScore <= 185 && totalScore >= 100) {
      return PREGNANCY_TEST_ONLINE_RESULTS_LIST.result2[goal];
    }

    return PREGNANCY_TEST_ONLINE_RESULTS_LIST.result3[goal];
  }
};
