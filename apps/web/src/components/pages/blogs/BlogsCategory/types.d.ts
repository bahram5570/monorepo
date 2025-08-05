import { BlogsResponseTypes } from '@app/blogs/types';

type CategoriesTypes = Pick<BlogsResponseTypes, 'categories'>;
export interface BlogsCategoryTypes extends CategoriesTypes {}
