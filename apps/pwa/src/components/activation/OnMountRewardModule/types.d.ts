import { OrderOfRewardElementsTypes } from '@providers/__activation__/types';

import { CurrentRewardDataTypes, MainActivationModuleProps } from '../MainActivationModule/types';

export interface OnMountRewardModuleProps extends Pick<MainActivationModuleProps, 'firstName' | 'noBackButton'> {
  showRewardLottie?: boolean;
  currentRewardData: CurrentRewardDataTypes;
  orderOfRewardElements?: OrderOfRewardElementsTypes;
}

export type IsOpenHandlerTypes = (t: 'back' | 'close') => void;
