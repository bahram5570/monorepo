import { ActivationRoutesInfoTypes } from '@providers/__activation__/types';

export const CHANGE_PHASE_ROUTES: ActivationRoutesInfoTypes = {
  step1: {
    questionId: 60,
    progressPercentage: 25,
    payloadKeys: ['pragnencyHistoryType'],
    nextActivationList: {
      condition1: { url: 'step2', rewardId: 65 },
      condition2: { url: 'step2', rewardId: 68 },
      condition3: { url: 'step2', rewardId: 67 },
    },
  },
  step2: {
    questionId: 61,
    progressPercentage: 50,
    payloadKeys: ['pragnencyDisease'],
    nextActivationList: {
      condition1: { url: 'step3' },
      condition2: { url: 'step3', rewardId: 66 },
    },
  },
  step3: {
    questionId: 63,
    progressPercentage: 75,
    payloadKeys: ['pregnancyDate'],
    onMountRewardId: 62,
    nextActivationList: {
      condition1: { url: 'step4' },
    },
  },
  step4: {
    questionId: 99,
    progressPercentage: 100,
    payloadKeys: ['weightBeforePregnancy'],
    nextActivationList: {
      condition1: {
        url: { isRegister: true },
      },
    },
  },
};
