export type NameSelectorActivationPageNamesTypes = 'step1' | 'step2' | 'step3' | 'step4' | 'completion';

export type NameSelectorActivationPagesInfoTypes = {
  [x in NameSelectorActivationPageNamesTypes]: {
    progressPercent: number | null;
    page: NameSelectorActivationPageNamesTypes;
    nextStep: NameSelectorActivationPageNamesTypes | null;
  };
};
