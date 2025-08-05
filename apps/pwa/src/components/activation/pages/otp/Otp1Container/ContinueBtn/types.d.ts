import { InvalidMessageTypes } from '../__hooks__/useValidation/types';

export interface ContinueBtnProps {
  invalidMessage: InvalidMessageTypes;
  showContinueBtn: boolean;
  nextHandler: () => void;
  isLoading: boolean;
}
