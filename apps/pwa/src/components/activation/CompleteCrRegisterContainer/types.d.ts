import { ActivationDataTypes } from '@services/activationServices/types';
import { UserCookieTypes } from '@utils/cookies';

import { ActivationPayloadTypes } from '@providers/__activation__/types';

type PageTypes = Pick<ActivationDataTypes, 'reward'>['reward'][0]['page'];
export interface CompleteCrRegisterContainerProps {
  payload: ActivationPayloadTypes;
  fetchedUser: UserCookieTypes;
  partnerData?: { reward?: PageTypes; question?: PageTypes };
}

export interface CompleteCrRegisterCycleLoadingProps extends Pick<CompleteCrRegisterContainerProps, 'fetchedUser'> {
  createCycleImage: string;
}
