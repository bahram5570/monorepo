import { ChallengeResponseType } from '../__hooks__/useGetData/type';

export type AvatarPropsType = {
  avatar: string;
  name: string;
  upload?: boolean;
};

export type AvatarContainerPropsType = Pick<
  ChallengeResponseType,
  'manAvatar' | 'womanAvatar' | 'manName' | 'womanName' | 'valid' | 'canDeleteProfile'
>;
