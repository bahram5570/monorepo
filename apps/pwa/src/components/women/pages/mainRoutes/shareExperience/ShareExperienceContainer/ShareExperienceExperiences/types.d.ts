import { ShareExperienceResponseTypes } from '../__hooks__/useShareExperienceGetData/types';

export interface ShareExperienceExperiencesProps extends Pick<ShareExperienceResponseTypes, 'profile'> {
  selectedCategoryId: string | null;
  onSuccessNewHandler: () => void;
}
