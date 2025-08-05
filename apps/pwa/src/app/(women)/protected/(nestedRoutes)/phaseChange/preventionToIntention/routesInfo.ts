import { ActivationRoutesInfoTypes } from '@providers/__activation__/types';

export const CHANGE_PHASE_ROUTES: ActivationRoutesInfoTypes = {
  step1: {
    questionId: 4,
    progressPercentage: 33,
    payloadKeys: ['periodStatus'],
    nextActivationList: {
      condition1: { url: 'step2', rewardId: 16 },
      condition2: { url: 'step2', rewardId: 21 },
    },
    onMountRewardId: 15,
  },
  step2: {
    questionId: 6,
    progressPercentage: 66,
    payloadKeys: ['onFertilitySex'],
    nextActivationList: {
      condition1: { url: 'step3', rewardId: 18 },
      condition2: { url: 'step3', rewardId: 23 },
    },
  },
  step3: {
    questionId: 7,
    progressPercentage: 100,
    payloadKeys: ['pragnencyHistoryStatus'],
    nextActivationList: {
      condition1: { url: { isRegister: true }, rewardId: 19 },
      condition2: { url: { isRegister: true }, rewardId: 24 },
      condition3: { url: { isRegister: true }, rewardId: 26 },
      condition4: { url: { isRegister: true } },
    },
  },
};
