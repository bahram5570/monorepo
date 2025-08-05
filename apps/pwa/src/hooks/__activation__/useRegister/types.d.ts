import { RewardTypes } from '@services/activationServices/types';

export type RegisterSuccessHandlerTypes = (v: {
  token: string;
  pair: boolean;
  result: boolean;
  reward: RewardTypes;
}) => void;

export type NotificationRewardTypes = Pick<RewardTypes, 'page'>['page'];
