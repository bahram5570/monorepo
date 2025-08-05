import { LoginResponseTypes } from '@services/loginServices/types';

import { Otp2ContainerProps } from '../../types';
import { OtpStatusHandlerTypes } from '../useOtpStatus/types';

export interface UseLoginPros extends Pick<Otp2ContainerProps, 'onSubmitLogin'> {
  otpStatusHandler: OtpStatusHandlerTypes;
  identity: string | undefined;
  password: string | undefined;
}

export type ForgotSuccessHandlerTypes = (v: { result: boolean }) => void;

export type LoginSuccessHandlerTypes = (v: LoginResponseTypes) => void;
