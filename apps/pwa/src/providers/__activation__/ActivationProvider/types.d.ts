import { ActivationDataTypes } from '@services/activationServices/types';

import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';

import { ActivationPayloadTypes } from '../types';

export type ActivationTypes = {
  payloadHandler: PayloadHandlerTypes;
  data: ActivationDataTypes | null;
  payload: ActivationPayloadTypes;
};

export interface ActivationProviderProps {
  questionsData: ActivationDataTypes;
  children: React.ReactNode;
  errorCode: null | number;
}
