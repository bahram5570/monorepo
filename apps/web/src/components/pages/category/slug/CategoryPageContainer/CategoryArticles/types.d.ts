import { CategoryPageContainerTypes } from '../types';

type ItemsTypes = Pick<CategoryPageContainerTypes, 'categoryData'>['categoryData'];
type IdTypes = Pick<ItemsTypes, 'id'>;
export interface CategoryArticlesTypes extends IdTypes {}
