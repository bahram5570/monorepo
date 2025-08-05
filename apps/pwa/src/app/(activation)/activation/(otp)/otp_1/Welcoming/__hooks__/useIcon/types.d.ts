import { StepsList } from '../useWelcomingSteps/constants';

export interface UseIconProps {
  onSteps: (v: StepsList) => void;
  steps: StepsList;
}
