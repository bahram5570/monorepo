import { OtpStatusHandlerTypes } from '../useOtpStatus/types';

export interface UseValidationProps {
  otpStatusHandler: OtpStatusHandlerTypes;
  validationCompleteHandler: () => void;
  isRegister: boolean | undefined;
  identity: string | undefined;
}

export type SubmitHandlerTypes = (code: string) => void;

export type SuccessHandlerTypes = (v: { result: boolean }) => void;
