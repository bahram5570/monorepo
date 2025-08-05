import { ActivationRoutesInfoTypes } from '@providers/__activation__/types';

export const CHANGE_PHASE_ROUTES: ActivationRoutesInfoTypes = {
  step1: {
    questionId: 72,
    progressPercentage: 25,
    payloadKeys: ['childBirthDate'],
    nextActivationList: {
      condition1: { url: 'step2' },
    },
  },
  step2: {
    questionId: 75,
    progressPercentage: 50,
    payloadKeys: ['childBirthType'],
    nextActivationList: {
      condition1: { url: 'step3' },
    },
  },
  step3: {
    questionId: 73,
    progressPercentage: 75,
    payloadKeys: ['childType'],
    nextActivationList: {
      condition1: { url: 'step4' },
      condition2: {
        url: { isRegister: true },
      },
    },
  },
  step4: {
    questionId: 74,
    payloadKeys: ['childName'],
    nextActivationList: {
      condition1: {
        url: { isRegister: true },
      },
    },
  },
};
