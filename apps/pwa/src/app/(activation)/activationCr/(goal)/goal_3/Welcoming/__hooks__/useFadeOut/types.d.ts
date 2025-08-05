import { StepsList } from '../useWelcomingSteps/constants';

export interface useFadeOutProps {
  onSteps: (v: StepsList) => void;
  steps: StepsList;
}
