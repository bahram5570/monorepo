import { ShareExperienceNewLinkProps } from '../../../ShareExperienceContainer/ShareExperienceNewLink/types';
import { ShareExperienceNewExerciseModalProps } from '../types';

type ProfileTypes = Pick<ShareExperienceNewLinkProps, 'profile'>['profile'];
export type ShareExperienceNewExerciseModalTypes = Pick<ProfileTypes, 'avatarImage' | 'username'>;

type OnSuccessTypes = Pick<ShareExperienceNewExerciseModalProps, 'onSuccessNewHandler'>;
type ItemsTypes = OnSuccessTypes & ShareExperienceNewExerciseModalTypes;
export interface ShareExperienceNewExerciseModalContainerProps extends ItemsTypes {}
