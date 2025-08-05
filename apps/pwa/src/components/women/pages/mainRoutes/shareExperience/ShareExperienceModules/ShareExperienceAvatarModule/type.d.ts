import { ShareExperenceProfileResponsePropsType } from '../../ShareExperienceModals/ShareExperienceProfileModal/ShareExperienceProfileModalContainer/__hooks__/useGetData/type';

export type ProfileType = Pick<ShareExperenceProfileResponsePropsType, 'profile'>['profile'];
type AvatarItemType = Pick<ProfileType, 'avatarImage' | 'id' | 'username'>;

export interface ShareExperienceAvatarModulePropsType extends AvatarItemType {
  showChangeAvatarIcon: boolean;
}
