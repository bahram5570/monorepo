import { ActivationDataTypes } from '@services/activationServices/types';

type PageTypes = Pick<ActivationDataTypes, 'reward'>['reward'][0]['page'];
export interface PartnerCodeContainerProps {
  firstName: string;
  reward: PageTypes;
  isLoading: boolean;
  question: PageTypes;
  onComplete?: () => void;
  onSubmit: (v: { code: string }) => void;
}
