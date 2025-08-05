import { StepsList } from '../useWelcomingSteps/constants';
import { onCompleteType } from '../useWelcomingSteps/types';

export interface UseFinishProps {
  onSteps: (v: StepsList) => void;
  steps: StepsList;
  onComplete?: onCompleteType;
}
