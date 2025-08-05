import { ActivationDataTypes } from '@services/activationServices/types';

import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';
import { ActivationPayloadTypes } from '@providers/__activation__/types';

export type PhaseChangeTypes = {
  payloadHandler: PayloadHandlerTypes;
  data: ActivationDataTypes | null;
  payload: ActivationPayloadTypes;
};

export interface PhaseChangeProviderProps {
  questionsData: ActivationDataTypes;
  children: React.ReactNode;
  errorCode: null | number;
}
