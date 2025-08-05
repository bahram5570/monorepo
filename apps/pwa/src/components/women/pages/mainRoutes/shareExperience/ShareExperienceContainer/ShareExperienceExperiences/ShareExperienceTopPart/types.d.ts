import { ExperiencesDataTypes } from '../__hooks__/useExperiences/types';

type ExperiencesTypes = ExperiencesDataTypes[0];
type ItemsTypes = Pick<
  ExperiencesTypes,
  | 'avatar'
  | 'approvedProfile'
  | 'isFollow'
  | 'isPin'
  | 'name'
  | 'createTime'
  | 'topicName'
  | 'userId'
  | 'selfExperience'
>;
export interface ShareExperienceTopPartProps extends ItemsTypes {}
