import { OtpStatusTypes } from '../../__hooks__/useValidation/types';

export interface SingleCodeProps {
  stepHandler: (v: string) => void;
  focusInfo: { index: number };
  otpStatus: OtpStatusTypes;
  deleteHandler: () => void;
  stepValue: string;
  stepIndex: number;
}

export type ValueHandlerTypes = (e: React.ChangeEvent<HTMLInputElement>) => void;

export type KeyDownHandlerTypes = (e: React.KeyboardEvent<HTMLInputElement>) => void;
