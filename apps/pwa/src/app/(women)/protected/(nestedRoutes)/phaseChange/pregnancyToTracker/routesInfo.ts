import { ActivationRoutesInfoTypes } from '@providers/__activation__/types';

const FIRST_ROUTES: ActivationRoutesInfoTypes = {
  step1: {
    questionId: 71,
    payloadKeys: ['status', 'periodStatus'],
    nextActivationList: {
      condition1: { url: 'tracker_step1', rewardId: 27 },
      condition2: { url: 'intention_step1', rewardId: 15 },
    },
  },
};

const TRACKER_ROUTES: ActivationRoutesInfoTypes = {
  tracker_step1: {
    questionId: 30,
    progressPercentage: 15,
    payloadKeys: ['pmsStatus'],
    nextActivationList: {
      condition1: { url: 'tracker_step2' },
      condition2: { url: 'tracker_step2', rewardId: 37 },
      condition3: { url: 'tracker_step2', rewardId: 40 },
    },
  },
  tracker_step2: {
    questionId: 29,
    progressPercentage: 30,
    payloadKeys: ['periodSituation'],
    nextActivationList: {
      condition1: { url: 'tracker_step3', rewardId: 38 },
      condition2: { url: 'tracker_step3', rewardId: 41 },
      condition3: { url: 'tracker_step3', rewardId: 42 },
    },
  },
  tracker_step3: {
    questionId: 47,
    progressPercentage: 45,
    payloadKeys: ['sickness'],
    nextActivationList: {
      condition1: { url: 'tracker_step4' },
      condition2: { url: 'tracker_step4', rewardId: 56 },
    },
  },
  tracker_step4: {
    questionId: 69,
    progressPercentage: 60,
    payloadKeys: ['status', 'periodStatus'],
    nextActivationList: {
      condition1: { url: 'tracker_step5' },
      condition2: { url: 'prevention_step1' },
    },
  },
  tracker_step5: {
    questionId: 9,
    progressPercentage: 75,
    payloadKeys: ['startPeriodDate'],
    nextActivationList: {
      condition1: { url: 'tracker_step6' },
    },
  },
  tracker_step6: {
    questionId: 10,
    progressPercentage: 90,
    payloadKeys: ['totalCycleLength'],
    nextActivationList: {
      condition1: { url: 'tracker_step7' },
    },
  },
  tracker_step7: {
    questionId: 11,
    progressPercentage: 100,
    payloadKeys: ['periodLength'],
    nextActivationList: {
      condition1: { url: { isRegister: true } },
    },
  },
};

const PREVENTION_ROUTES: ActivationRoutesInfoTypes = {
  prevention_step1: {
    questionId: 44,
    progressPercentage: 70,
    payloadKeys: ['preventionSexCommited'],
    onMountRewardId: 43,
    nextActivationList: {
      condition1: { url: 'prevention_step2' },
      condition2: { url: 'prevention_step2', rewardId: 53 },
      condition3: { url: 'prevention_step2', rewardId: 53 },
    },
  },
  prevention_step2: {
    questionId: 45,
    progressPercentage: 76,
    payloadKeys: ['preventionWays'],
    nextActivationList: {
      condition1: { url: 'prevention_step3', rewardId: 54 },
    },
  },
  prevention_step3: {
    questionId: 49,
    progressPercentage: 82,
    payloadKeys: ['startPeriodDate'],
    nextActivationList: {
      condition1: { url: 'prevention_step4' },
    },
    onMountRewardId: 48,
  },
  prevention_step4: {
    questionId: 50,
    progressPercentage: 90,
    payloadKeys: ['totalCycleLength'],
    nextActivationList: {
      condition1: { url: 'prevention_step5' },
    },
  },
  prevention_step5: {
    questionId: 51,
    progressPercentage: 100,
    payloadKeys: ['periodLength'],
    nextActivationList: {
      condition1: { url: { isRegister: true } },
    },
  },
};

const INTENTION_ROUTES: ActivationRoutesInfoTypes = {
  intention_step1: {
    questionId: 4,
    progressPercentage: 12.5,
    payloadKeys: ['periodStatus'],
    nextActivationList: {
      condition1: { url: 'intention_step2', rewardId: 16 },
      condition2: { url: 'intention_step2', rewardId: 21 },
    },
  },
  intention_step2: {
    questionId: 5,
    progressPercentage: 25,
    payloadKeys: ['periodSituation'],
    nextActivationList: {
      condition1: { url: 'intention_step3', rewardId: 25 },
      condition2: { url: 'intention_step3', rewardId: 17 },
      condition3: { url: 'intention_step3', rewardId: 22 },
    },
  },
  intention_step3: {
    questionId: 6,
    progressPercentage: 37.5,
    payloadKeys: ['onFertilitySex'],
    nextActivationList: {
      condition1: { url: 'intention_step4', rewardId: 18 },
      condition2: { url: 'intention_step4', rewardId: 23 },
    },
  },
  intention_step4: {
    questionId: 7,
    progressPercentage: 50,
    payloadKeys: ['pragnencyHistoryStatus'],
    nextActivationList: {
      condition1: { url: 'intention_step5', rewardId: 19 },
      condition2: { url: 'intention_step5', rewardId: 24 },
      condition3: { url: 'intention_step5', rewardId: 26 },
      condition4: { url: 'intention_step5' },
    },
  },
  intention_step5: {
    questionId: 8,
    progressPercentage: 62.5,
    payloadKeys: ['sickness'],
    nextActivationList: {
      condition1: { url: 'intention_step6' },
      condition2: { url: 'intention_step6', rewardId: 20 },
    },
  },
  intention_step6: {
    questionId: 49,
    progressPercentage: 75,
    payloadKeys: ['startPeriodDate'],
    nextActivationList: {
      condition1: { url: 'intention_step7' },
    },
    onMountRewardId: 48,
  },
  intention_step7: {
    questionId: 50,
    progressPercentage: 87.5,
    payloadKeys: ['totalCycleLength'],
    nextActivationList: {
      condition1: { url: 'intention_step8' },
    },
  },
  intention_step8: {
    questionId: 51,
    progressPercentage: 100,
    payloadKeys: ['periodLength'],
    nextActivationList: {
      condition1: { url: { isRegister: true } },
    },
  },
};

export const CHANGE_PHASE_ROUTES: ActivationRoutesInfoTypes = {
  ...FIRST_ROUTES,
  ...TRACKER_ROUTES,
  ...INTENTION_ROUTES,
  ...PREVENTION_ROUTES,
};
