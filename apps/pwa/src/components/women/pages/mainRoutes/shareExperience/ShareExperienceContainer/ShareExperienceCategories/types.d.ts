import { SelectedCategoryIdHandlerTypes } from '../__hooks__/useCategories/types';
import { ShareExperienceResponseTypes } from '../__hooks__/useShareExperienceGetData/types';

export interface ShareExperienceCategoriesProps extends Pick<ShareExperienceResponseTypes, 'categories'> {
  selectedCategoryId: string;
  selectedCategoryIdHandler: SelectedCategoryIdHandlerTypes;
}
