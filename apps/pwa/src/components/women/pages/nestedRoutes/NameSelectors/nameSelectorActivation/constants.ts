import { NameSelectorActivationPagesInfoTypes } from './types';

export const NAME_SELECTOR_ACTIVATION_PAGES_INFO: NameSelectorActivationPagesInfoTypes = {
  step1: { page: 'step1', nextStep: 'step2', progressPercent: 20 },
  step2: { page: 'step2', nextStep: 'step3', progressPercent: 40 },
  step3: { page: 'step3', nextStep: 'step4', progressPercent: 60 },
  step4: { page: 'step4', nextStep: 'completion', progressPercent: 80 },
  completion: { page: 'completion', nextStep: null, progressPercent: null },
};
