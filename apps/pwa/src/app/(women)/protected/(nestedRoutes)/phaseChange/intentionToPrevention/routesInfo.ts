import { ActivationRoutesInfoTypes } from '@providers/__activation__/types';

export const CHANGE_PHASE_ROUTES: ActivationRoutesInfoTypes = {
  step1: {
    questionId: 44,
    progressPercentage: 50,
    payloadKeys: ['periodLength'],
    onMountRewardId: 43,
    nextActivationList: {
      condition1: { url: 'step2' },
      condition2: { url: 'step2', rewardId: 53 },
      condition3: { url: 'step2', rewardId: 53 },
    },
  },
  step2: {
    questionId: 45,
    progressPercentage: 100,
    payloadKeys: ['preventionWays'],
    nextActivationList: {
      condition1: { url: { isRegister: true }, rewardId: 54 },
    },
  },
};
