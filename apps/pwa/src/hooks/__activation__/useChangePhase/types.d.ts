import { ActivationPayloadTypes } from '@providers/__activation__/types';

export interface UsePhaseChangeProps {
  payload: ActivationPayloadTypes;
  api: 'info/period/enter' | 'info/pregnency/enter' | 'info/breastfeeding/enter';
}
