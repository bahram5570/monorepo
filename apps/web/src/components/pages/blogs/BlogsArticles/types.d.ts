import { BlogsResponseTypes } from '@app/blogs/types';

type CategoriesTypes = Pick<BlogsResponseTypes, 'categories'>;
export interface BlogsArticlesTypes extends CategoriesTypes {}
