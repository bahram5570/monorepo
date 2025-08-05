import { RewardBtnTypes } from '@components/activation/RewardModule/types';

import { CurrentRewardDataTypes, MainActivationModuleProps } from '../types';

export interface ContinueBtnProps
  extends Pick<
    MainActivationModuleProps,
    | 'firstName'
    | 'isLoading'
    | 'onRegister'
    | 'noBackButton'
    | 'nextActivation'
    | 'invalidMessage'
    | 'showContinueBtn'
    | 'orderOfRewardElements'
  > {
  currentRewardData: CurrentRewardDataTypes;
}

export interface BtnProps extends Pick<ContinueBtnProps, 'nextActivation' | 'isLoading'> {
  nextHandler: () => void;
  hasReward: boolean;
}

export interface RewardProps
  extends Pick<
    ContinueBtnProps,
    'currentRewardData' | 'firstName' | 'orderOfRewardElements' | 'isLoading' | 'noBackButton'
  > {
  nextHandler: RewardBtnTypes;
}
