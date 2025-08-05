import { InvalidMessageTypes } from '../../otp/Otp1Container/__hooks__/useValidation/types';
import { PartnerCodeContainerProps } from '../types';

export interface PartnerCodeInputProps extends Pick<PartnerCodeContainerProps, 'question' | 'onSubmit' | 'isLoading'> {}

type QuestionsTypes = Pick<Pick<PartnerCodeInputProps, 'question'>['question'], 'title' | 'description'>;
export interface PartnerCodeInputHeadingProps extends QuestionsTypes {
  isLargeScreen: boolean;
}

export interface PartnerCodeInputContinueBtnProps {
  isLoading: boolean;
  onSubmit: () => void;
  showContinueBtn: boolean;
  invalidMessage: InvalidMessageTypes;
}
