import { ActivationRoutesInfoTypes } from '@providers/__activation__/types';

export const CHANGE_PHASE_ROUTES: ActivationRoutesInfoTypes = {
  step1: {
    questionId: 30,
    progressPercentage: 50,
    payloadKeys: ['pmsStatus'],
    nextActivationList: {
      condition1: { url: { isRegister: true } },
      condition2: { url: { isRegister: true }, rewardId: 37 },
      condition3: { url: { isRegister: true }, rewardId: 40 },
    },
    onMountRewardId: 27,
  },
};
