import { PartnerCodeContainerProps } from '../types';

export interface PartnerCodeRewardProps
  extends Pick<PartnerCodeContainerProps, 'reward' | 'onComplete' | 'firstName'> {}

type RewardTypes = Pick<PartnerCodeRewardProps, 'reward'>['reward'];

export interface PartnerCodeRewardHeadingImageProps extends Pick<RewardTypes, 'image' | 'doRepeat'> {
  backgroundColor: string;
}

type FirstNametTypes = Pick<PartnerCodeContainerProps, 'firstName'>;
type TitleTypes = Pick<RewardTypes, 'title' | 'description'>;
type ScriptsTypes = FirstNametTypes & TitleTypes;
export interface PartnerCodeRewardScriptsProps extends ScriptsTypes {}

type OnCompleteTypes = Pick<PartnerCodeRewardProps, 'onComplete'>;
type LablesTypes = Pick<RewardTypes, 'btnLabel' | 'btnLabel2'>;
type ButtonsTypes = OnCompleteTypes & LablesTypes;
export interface PartnerCodeRewardButtonsProps extends ButtonsTypes {}
