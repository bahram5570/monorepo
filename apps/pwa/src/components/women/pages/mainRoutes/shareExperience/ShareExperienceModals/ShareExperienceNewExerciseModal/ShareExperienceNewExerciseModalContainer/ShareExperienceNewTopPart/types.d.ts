import { ShareExperienceNewExerciseModalContainerProps } from '../types';

export interface ShareExperienceNewTopPartProps
  extends Pick<ShareExperienceNewExerciseModalContainerProps, 'avatarImage' | 'username'> {
  text: string;
}
