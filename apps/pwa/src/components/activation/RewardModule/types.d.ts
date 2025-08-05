import { OrderOfRewardElementsTypes } from '@providers/__activation__/types';

import { CurrentRewardDataTypes, MainActivationModuleProps } from '../MainActivationModule/types';

export type RewardBtnTypes = (v?: { isBtn2: boolean }) => void;

export interface RewardModuleProps extends Pick<MainActivationModuleProps, 'firstName' | 'isLoading' | 'noBackButton'> {
  orderOfRewardElements?: OrderOfRewardElementsTypes;
  currentRewardData: CurrentRewardDataTypes;
  btnHandler: RewardBtnTypes;
  isOnMountModule?: boolean;
}

export interface ScriptsProps extends Pick<RewardModuleProps, 'firstName'> {
  description: string;
  title: string;
  order: number;
}

export interface HeadingImageProps {
  backgroundColor: string;
  doRepeat: boolean;
  image: string;
  order: number;
}

export interface BtnProps extends Pick<RewardModuleProps, 'isLoading'> {
  btnHandler: RewardBtnTypes;
  isOnMountModule?: boolean;
  btnLabel2?: string;
  btnLabel: string;
}
