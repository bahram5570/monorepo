import { BlogsCategoryTypes } from '../types';

type CategoriesListTypes = Pick<BlogsCategoryTypes, 'categories'>;

export interface BlogsCategoriesTypes extends CategoriesListTypes {}

export interface BlogsCategoriesSmallScreenTypes extends CategoriesListTypes {}

export interface BlogsCategoriesBigScreenTypes extends CategoriesListTypes {}

type ItemsTypes = Pick<CategoriesListTypes, 'categories'>['categories'][0];
export type UpdatedCategoriesTypes = (ItemsTypes & { cols: number })[];
