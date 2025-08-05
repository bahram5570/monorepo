import { ActivationDataTypes } from '@services/activationServices/types';
import { UserCookieTypes } from '@utils/cookies';

import { ActivationPayloadTypes } from '@providers/__activation__/types';

type PageTypes = Pick<ActivationDataTypes, 'reward'>['reward'][0]['page'];
export interface CompleteRegisterContainerProps {
  payload: ActivationPayloadTypes;
  clearStorage?: boolean;
  fetchedUser: UserCookieTypes;
  accessNotificationData?: PageTypes;
  partnerData?: { reward?: PageTypes; question?: PageTypes };
}

export interface CompleteRegisterCycleLoadingProps {
  createCycleImage: string;
}
