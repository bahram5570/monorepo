import { ActivationRoutesInfoTypes } from '@providers/__activation__/types';

const TRACKER_ROUTES: ActivationRoutesInfoTypes = {
  tracker_step1: {
    questionId: 30,
    progressPercentage: 20,
    payloadKeys: ['pmsStatus'],
    nextActivationList: {
      condition1: { url: 'tracker_step2' },
      condition2: { url: 'tracker_step2', rewardId: 37 },
      condition3: { url: 'tracker_step2', rewardId: 40 },
    },
    onMountRewardId: 27,
  },
  tracker_step2: {
    questionId: 29,
    progressPercentage: 40,
    payloadKeys: ['periodSituation'],
    nextActivationList: {
      condition1: { url: 'tracker_step3', rewardId: 38 },
      condition2: { url: 'tracker_step3', rewardId: 41 },
      condition3: { url: 'tracker_step3', rewardId: 42 },
    },
  },
  tracker_step3: {
    questionId: 47,
    progressPercentage: 60,
    payloadKeys: ['sickness'],
    nextActivationList: {
      condition1: { url: 'tracker_step5' },
      condition2: { url: 'tracker_step5', rewardId: 56 },
    },
  },
  tracker_step5: {
    questionId: 93,
    progressPercentage: 80,
    payloadKeys: ['weight'],
    nextActivationList: {
      condition1: { url: 'tracker_step6' },
    },
  },
  tracker_step6: {
    questionId: 94,
    progressPercentage: 100,
    payloadKeys: ['height'],
    nextActivationList: {
      condition1: { url: { isRegister: true } },
    },
  },
};

const PREVENTION_ROUTES: ActivationRoutesInfoTypes = {
  prevention_step1: {
    questionId: 30,
    progressPercentage: 15,
    payloadKeys: ['pmsStatus'],
    nextActivationList: {
      condition1: { url: 'prevention_step2' },
      condition2: { url: 'prevention_step2', rewardId: 37 },
      condition3: { url: 'prevention_step2', rewardId: 40 },
    },
    onMountRewardId: 43,
  },
  prevention_step2: {
    questionId: 29,
    progressPercentage: 30,
    payloadKeys: ['periodSituation'],
    nextActivationList: {
      condition1: { url: 'prevention_step3', rewardId: 38 },
      condition2: { url: 'prevention_step3', rewardId: 41 },
      condition3: { url: 'prevention_step3', rewardId: 42 },
    },
  },
  prevention_step3: {
    questionId: 47,
    progressPercentage: 45,
    payloadKeys: ['sickness'],
    nextActivationList: {
      condition1: { url: 'prevention_step4' },
      condition2: { url: 'prevention_step4', rewardId: 56 },
    },
  },
  prevention_step4: {
    questionId: 44,
    progressPercentage: 60,
    payloadKeys: ['preventionSexCommited'],
    nextActivationList: {
      condition1: { url: 'prevention_step5' },
      condition2: { url: 'prevention_step5', rewardId: 53 },
      condition3: { url: 'prevention_step5', rewardId: 53 },
    },
  },
  prevention_step5: {
    questionId: 45,
    progressPercentage: 75,
    payloadKeys: ['preventionWays'],
    nextActivationList: {
      condition1: { url: 'prevention_step6', rewardId: 54 },
    },
  },
  prevention_step6: {
    questionId: 93,
    progressPercentage: 90,
    payloadKeys: ['weight'],
    nextActivationList: {
      condition1: { url: 'prevention_step7' },
    },
  },
  prevention_step7: {
    questionId: 94,
    progressPercentage: 100,
    payloadKeys: ['height'],
    nextActivationList: {
      condition1: { url: { isRegister: true } },
    },
  },
};

const INTENTION_ROUTES: ActivationRoutesInfoTypes = {
  intention_step1: {
    questionId: 4,
    progressPercentage: 15,
    payloadKeys: ['periodStatus'],
    nextActivationList: {
      condition1: { url: 'intention_step2', rewardId: 16 },
      condition2: { url: 'intention_step2', rewardId: 21 },
    },
    onMountRewardId: 15,
  },
  intention_step2: {
    questionId: 5,
    progressPercentage: 30,
    payloadKeys: ['periodSituation'],
    nextActivationList: {
      condition1: { url: 'intention_step3', rewardId: 25 },
      condition2: { url: 'intention_step3', rewardId: 17 },
      condition3: { url: 'intention_step3', rewardId: 22 },
    },
  },
  intention_step3: {
    questionId: 6,
    progressPercentage: 45,
    payloadKeys: ['onFertilitySex'],
    nextActivationList: {
      condition1: { url: 'intention_step4', rewardId: 18 },
      condition2: { url: 'intention_step4', rewardId: 23 },
    },
  },
  intention_step4: {
    questionId: 7,
    progressPercentage: 60,
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
    progressPercentage: 75,
    payloadKeys: ['sickness'],
    nextActivationList: {
      condition1: { url: 'intention_step6' },
      condition2: { url: 'intention_step6', rewardId: 20 },
    },
  },
  intention_step6: {
    questionId: 93,
    progressPercentage: 90,
    payloadKeys: ['weight'],
    nextActivationList: {
      condition1: { url: 'intention_step7' },
    },
  },
  intention_step7: {
    questionId: 94,
    progressPercentage: 100,
    payloadKeys: ['height'],
    nextActivationList: {
      condition1: { url: { isRegister: true } },
    },
  },
};

const PREGNANCY_ROUTES: ActivationRoutesInfoTypes = {
  pregnancy_step1: {
    questionId: 60,
    progressPercentage: 20,
    payloadKeys: ['pragnencyHistoryType'],
    nextActivationList: {
      condition1: { url: 'pregnancy_step2', rewardId: 65 },
      condition2: { url: 'pregnancy_step2', rewardId: 68 },
      condition3: { url: 'pregnancy_step2', rewardId: 67 },
    },
    onMountRewardId: 59,
  },
  pregnancy_step2: {
    questionId: 61,
    progressPercentage: 40,
    payloadKeys: ['pragnencyDisease'],
    nextActivationList: {
      condition1: { url: 'pregnancy_step3' },
      condition2: { url: 'pregnancy_step3', rewardId: 66 },
    },
  },
  pregnancy_step3: {
    questionId: 99,
    progressPercentage: 60,
    payloadKeys: ['weightBeforePregnancy'],
    nextActivationList: {
      condition1: { url: 'pregnancy_step4' },
    },
  },
  pregnancy_step4: {
    questionId: 100,
    progressPercentage: 80,
    payloadKeys: ['weight'],
    nextActivationList: {
      condition1: { url: 'pregnancy_step5' },
    },
  },
  pregnancy_step5: {
    questionId: 101,
    progressPercentage: 100,
    payloadKeys: ['height'],
    nextActivationList: {
      condition1: { url: { isRegister: true } },
    },
  },
};

export const COMPLETE_ACTIVATION_ROUTES: ActivationRoutesInfoTypes = {
  ...TRACKER_ROUTES,
  ...INTENTION_ROUTES,
  ...PREGNANCY_ROUTES,
  ...PREVENTION_ROUTES,
};
