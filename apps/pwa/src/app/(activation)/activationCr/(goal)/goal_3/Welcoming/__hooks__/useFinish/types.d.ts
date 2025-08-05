import { StepsList } from '../useWelcomingSteps/constants';

export interface UseFinishProps {
  onSteps: (v: StepsList) => void;
  steps: StepsList;
}
