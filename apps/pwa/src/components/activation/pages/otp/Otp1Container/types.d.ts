import { ActivationContainerProps } from '../../types';

export type OtpInfoTypes = {
  isRegister: boolean;
  isPhone: boolean;
  identity: string;
  password: string;
};

export type Otp1CompleteHandlerTypes = (v: OtpInfoTypes) => void;

export interface Otp1ContainerProps extends Pick<ActivationContainerProps, 'payload' | 'payloadHandler'> {
  otp1CompleteHandler: Otp1CompleteHandlerTypes;
}
