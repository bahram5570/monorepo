import { StepsList } from '../useWelcomingSteps/constants';

export interface useFadeInProps {
  onSteps: (v: StepsList) => void;
  steps: StepsList;
}
