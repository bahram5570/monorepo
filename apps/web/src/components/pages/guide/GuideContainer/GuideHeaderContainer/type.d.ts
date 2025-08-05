import { StepType } from '../type';

export type GuideHeaderContainerPropsType = {
  stepList: StepType[];
  currentStep: number;
  prevStep: () => void;
};
