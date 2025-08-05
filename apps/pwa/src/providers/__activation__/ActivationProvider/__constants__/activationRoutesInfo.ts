import { ActivationRoutesInfoTypes } from '@providers/__activation__/types';

const GOALS_ROUTES: ActivationRoutesInfoTypes = {
  goal_1: {
    questionId: 1,
    noBackButton: true,
    payloadKeys: ['firstName'],
    nextActivationList: {
      condition1: { url: 'goal_2' },
    },
  },
  goal_2: {
    questionId: 2,
    payloadKeys: ['birthDate'],
    nextActivationList: {
      condition1: { url: 'goal_3' },
    },
  },
  goal_3: {
    questionId: 3,
    payloadKeys: ['status', 'periodStatus'],
    nextActivationList: {
      condition1: { url: 'tracker_1', rewardId: 27 },
      condition2: { url: 'intention_1', rewardId: 15 },
      condition3: { url: 'pregnancy_1', rewardId: 59 },
    },
    orderOfQuestionScripts: { title: 1, subtitle: 3, description: 2 },
  },
};

const INTENTION_ROUTES: ActivationRoutesInfoTypes = {
  intention_1: {
    questionId: 4,
    progressPercentage: 10,
    payloadKeys: ['periodStatus'],
    nextActivationList: {
      condition1: { url: 'intention_2', rewardId: 16 },
      condition2: { url: 'intention_2', rewardId: 21 },
    },
  },
  intention_2: {
    questionId: 5,
    progressPercentage: 20,
    payloadKeys: ['periodSituation'],
    nextActivationList: {
      condition1: { url: 'intention_3', rewardId: 25 },
      condition2: { url: 'intention_3', rewardId: 17 },
      condition3: { url: 'intention_3', rewardId: 22 },
    },
  },
  intention_3: {
    questionId: 6,
    progressPercentage: 30,
    payloadKeys: ['onFertilitySex'],
    nextActivationList: {
      condition1: { url: 'intention_4', rewardId: 18 },
      condition2: { url: 'intention_4', rewardId: 23 },
    },
  },
  intention_4: {
    questionId: 7,
    progressPercentage: 40,
    payloadKeys: ['pragnencyHistoryStatus'],
    nextActivationList: {
      condition1: { url: 'intention_5', rewardId: 19 },
      condition2: { url: 'intention_5', rewardId: 24 },
      condition3: { url: 'intention_5', rewardId: 26 },
      condition4: { url: 'intention_5' },
    },
  },
  intention_5: {
    questionId: 8,
    progressPercentage: 50,
    payloadKeys: ['sickness'],
    nextActivationList: {
      condition1: { url: 'intention_9' },
    },
  },
  intention_6: {
    questionId: 9,
    progressPercentage: 60,
    payloadKeys: ['startPeriodDate'],
    nextActivationList: {
      condition1: { url: 'intention_7' },
    },
    onMountRewardId: 12,
  },
  intention_7: {
    questionId: 10,
    progressPercentage: 80,
    payloadKeys: ['totalCycleLength'],
    nextActivationList: {
      condition1: { url: 'intention_8' },
    },
  },
  intention_8: {
    questionId: 11,
    progressPercentage: 100,
    payloadKeys: ['periodLength'],
    nextActivationList: {},
  },
  intention_9: {
    questionId: 90,
    progressPercentage: 60,
    payloadKeys: ['weight'],
    nextActivationList: {
      condition1: { url: 'intention_10' },
    },
  },
  intention_10: {
    questionId: 91,
    progressPercentage: 70,
    payloadKeys: ['height'],
    nextActivationList: {
      condition1: { url: 'intention_6' },
      condition2: { url: 'intention_6', rewardId: 20 },
    },
  },
};

const PREGNANCY_ROUTES: ActivationRoutesInfoTypes = {
  pregnancy_1: {
    questionId: 60,
    progressPercentage: 17,
    payloadKeys: ['pragnencyHistoryType'],
    nextActivationList: {
      condition1: { url: 'pregnancy_2', rewardId: 65 },
      condition2: { url: 'pregnancy_2', rewardId: 68 },
      condition3: { url: 'pregnancy_2', rewardId: 67 },
    },
  },
  pregnancy_2: {
    questionId: 61,
    progressPercentage: 34,
    payloadKeys: ['pragnencyDisease'],
    nextActivationList: {
      condition1: { url: 'pregnancy_4' },
      condition2: { url: 'pregnancy_4', rewardId: 66 },
    },
  },
  pregnancy_3: {
    questionId: 63,
    progressPercentage: 100,
    payloadKeys: ['pregnancyDate'],
    nextActivationList: {},
    onMountRewardId: 62,
  },
  pregnancy_4: {
    questionId: 99,
    progressPercentage: 51,
    payloadKeys: ['weightBeforePregnancy'],
    nextActivationList: {
      condition1: { url: 'pregnancy_5' },
    },
  },
  pregnancy_5: {
    questionId: 100,
    progressPercentage: 68,
    payloadKeys: ['weight'],
    nextActivationList: {
      condition1: { url: 'pregnancy_6' },
    },
  },
  pregnancy_6: {
    questionId: 101,
    progressPercentage: 85,
    payloadKeys: ['height'],
    nextActivationList: {
      condition1: { url: 'pregnancy_3' },
    },
  },
};

const TRACKER_ROUTES: ActivationRoutesInfoTypes = {
  tracker_1: {
    questionId: 30,
    progressPercentage: 11,
    payloadKeys: ['pmsStatus'],
    nextActivationList: {
      condition1: { url: 'tracker_2' },
      condition2: { url: 'tracker_2', rewardId: 37 },
      condition3: { url: 'tracker_2', rewardId: 40 },
    },
  },
  tracker_2: {
    questionId: 29,
    progressPercentage: 22,
    payloadKeys: ['periodSituation'],
    nextActivationList: {
      condition1: { url: 'tracker_3', rewardId: 38 },
      condition2: { url: 'tracker_3', rewardId: 41 },
      condition3: { url: 'tracker_3', rewardId: 42 },
    },
  },
  tracker_3: {
    questionId: 47,
    progressPercentage: 33,
    payloadKeys: ['sickness'],
    nextActivationList: {
      condition1: { url: 'tracker_4' },
      condition2: { url: 'tracker_4', rewardId: 56 },
    },
  },
  tracker_4: {
    questionId: 69,
    progressPercentage: 44,
    payloadKeys: ['status', 'periodStatus'],
    nextActivationList: {
      condition1: { url: 'tracker_8' },
      condition2: { url: 'prevention_1' },
    },
  },
  tracker_5: {
    questionId: 9,
    progressPercentage: 86,
    payloadKeys: ['startPeriodDate'],
    nextActivationList: {
      condition1: { url: 'tracker_6' },
    },
    onMountRewardId: 32,
  },
  tracker_6: {
    questionId: 10,
    progressPercentage: 66,
    payloadKeys: ['totalCycleLength'],
    nextActivationList: {
      condition1: { url: 'tracker_7' },
    },
  },
  tracker_7: {
    questionId: 11,
    progressPercentage: 100,
    payloadKeys: ['periodLength'],
    nextActivationList: {},
  },
  tracker_8: {
    questionId: 93,
    progressPercentage: 55,
    payloadKeys: ['weight'],
    nextActivationList: {
      condition1: { url: 'tracker_9' },
    },
  },
  tracker_9: {
    questionId: 94,
    progressPercentage: 77,
    payloadKeys: ['height'],
    nextActivationList: {
      condition1: { url: 'tracker_5' },
    },
  },
};

const PREVENTION_ROUTES: ActivationRoutesInfoTypes = {
  prevention_1: {
    questionId: 44,
    progressPercentage: 53,
    payloadKeys: ['periodLength'],
    nextActivationList: {
      condition1: { url: 'prevention_2' },
      condition2: { url: 'prevention_2', rewardId: 53 },
      condition3: { url: 'prevention_2', rewardId: 53 },
    },
    onMountRewardId: 43,
  },
  prevention_2: {
    questionId: 45,
    progressPercentage: 62,
    payloadKeys: ['preventionWays'],
    nextActivationList: {
      condition1: { url: 'prevention_6', rewardId: 54 },
    },
  },
  prevention_3: {
    questionId: 49,
    progressPercentage: 89,
    payloadKeys: ['startPeriodDate'],
    nextActivationList: {
      condition1: { url: 'prevention_4' },
    },
    onMountRewardId: 48,
  },
  prevention_4: {
    questionId: 50,
    progressPercentage: 95,
    payloadKeys: ['totalCycleLength'],
    nextActivationList: {
      condition1: { url: 'prevention_5' },
    },
  },
  prevention_5: {
    questionId: 51,
    progressPercentage: 100,
    payloadKeys: ['periodLength'],
    nextActivationList: {},
  },
  prevention_6: {
    questionId: 96,
    progressPercentage: 71,
    payloadKeys: ['weight'],
    nextActivationList: {
      condition1: { url: 'prevention_7' },
    },
  },
  prevention_7: {
    questionId: 97,
    progressPercentage: 80,
    payloadKeys: ['height'],
    nextActivationList: {
      condition1: { url: 'prevention_3' },
    },
  },
};

export const ACTIVATION_ROUTES_INFO: ActivationRoutesInfoTypes = {
  ...PREVENTION_ROUTES,
  ...PREGNANCY_ROUTES,
  ...INTENTION_ROUTES,
  ...TRACKER_ROUTES,
  ...GOALS_ROUTES,
};
