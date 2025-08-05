import { Otp1ContainerProps } from '../../types';

export interface useRegisterStatusProps extends Pick<Otp1ContainerProps, 'otp1CompleteHandler'> {
  identity: string;
  isPhone: boolean;
}
