import { ShareExperenceProfileResponsePropsType } from '../__hooks__/useGetData/type';

type ProfileType = Pick<
  ShareExperenceProfileResponsePropsType,
  'profile' | 'followCount' | 'storyCount' | 'isSelf' | 'isFollow'
>;

export interface ShareExperienceProfileTopPartPropsType extends ProfileType {}
