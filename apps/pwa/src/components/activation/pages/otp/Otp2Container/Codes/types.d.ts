import { OtpStatusTypes, SubmitHandlerTypes } from '../__hooks__/useValidation/types';

export interface CodesProps {
  submitHandler: SubmitHandlerTypes;
  otpStatus: OtpStatusTypes;
  isLoading: boolean;
}
