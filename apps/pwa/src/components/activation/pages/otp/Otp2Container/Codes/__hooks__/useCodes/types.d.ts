import { OtpStatusTypes, SubmitHandlerTypes } from '../../../__hooks__/useValidation/types';

export interface UseCodesProps {
  submitHandler: SubmitHandlerTypes;
  otpStatus: OtpStatusTypes;
}

export type StepsTypes = [string, string, string, string, string, string];

export type StepsHandlerTypes = (v: string, stepIndex: number) => void;
