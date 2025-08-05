import { ShareExperienceExperiencesProps } from '../../ShareExperienceContainer/ShareExperienceExperiences/types';

type ProfileTypes = Pick<Pick<ShareExperienceExperiencesProps, 'profile'>['profile'], 'avatarImage' | 'username'>;
type HandlerTypes = Pick<ShareExperienceExperiencesProps, 'onSuccessNewHandler'>;
type ItemsTypes = ProfileTypes & HandlerTypes;
export interface ShareExperienceNewExerciseModalProps extends ItemsTypes {}
