import { StepsList } from '../useWelcomingSteps/constants';

export interface UseTitlesProps {
  onSteps: (v: StepsList) => void;
  steps: StepsList;
}
