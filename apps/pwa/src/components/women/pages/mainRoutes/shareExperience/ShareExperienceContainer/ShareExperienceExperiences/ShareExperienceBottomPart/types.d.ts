import { ExperiencesDataTypes } from '../__hooks__/useExperiences/types';

type ExperiencesTypes = ExperiencesDataTypes[0];
type ItemsTypes = Pick<
  ExperiencesTypes,
  'disliked' | 'likeCount' | 'selfExperience' | 'commentCount' | 'id' | 'state' | 'isBookmarked'
>;
export interface ShareExperienceBottomPartProps extends ItemsTypes {}
