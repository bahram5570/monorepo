import { ActivationDataTypes } from '@services/activationServices/types';

import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';

import { ActivationPayloadTypes } from '../types';

export type ActivationCrTypes = {
  payloadHandler: PayloadHandlerTypes;
  data: ActivationDataTypes | null;
  payload: ActivationPayloadTypes;
};

export interface ActivationCrProviderProps {
  questionsData: ActivationDataTypes;
  children: React.ReactNode;
  errorCode: null | number;
}
