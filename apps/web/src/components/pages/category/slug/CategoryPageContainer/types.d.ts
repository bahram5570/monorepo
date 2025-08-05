import { BlogsResponseTypes } from '@app/blogs/types';
import { CategoryResponseTypes } from '@app/category/[slug]/types';

export interface CategoryPageContainerTypes {
  categoryData: CategoryResponseTypes;
  categoriesList: Pick<BlogsResponseTypes, 'categories'>['categories'];
}
