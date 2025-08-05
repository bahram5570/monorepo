import { ShareExperenceProfileResponsePropsType } from '../__hooks__/useGetData/type';
import { selfType } from './__hooks__/useSelfExperienceData/type';

export type ProfileType = Pick<ShareExperenceProfileResponsePropsType, 'profile'>['profile'];
export type IdType = Pick<ProfileType, 'id'>;
export type SelfType = Pick<ShareExperenceProfileResponsePropsType, 'isSelf'>;

export interface ShareExperenceProfileTabListPropsType extends IdType, SelfType {
  tab: number;
}
