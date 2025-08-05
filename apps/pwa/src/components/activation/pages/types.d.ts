import { ActivationDataTypes } from '@services/activationServices/types';

import { ActivationPayloadTypes, ActivationRoutesInfoTypes } from '@providers/__activation__/types';

import { PayloadHandlerTypes } from '../MainActivationModule/types';

export interface ActivationContainerProps {
  isLoading?: boolean;
  onRegister?: () => void;
  payload: ActivationPayloadTypes;
  info: ActivationRoutesInfoTypes[0];
  payloadHandler: PayloadHandlerTypes;
  activationData?: ActivationDataTypes;
}
