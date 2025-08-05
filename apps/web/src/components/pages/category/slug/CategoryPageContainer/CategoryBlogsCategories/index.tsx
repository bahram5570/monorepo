'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import BlogsCategories from '@components/pages/blogs/BlogsCategory/BlogsCategories';
import CustomTypography from '@components/ui/CustomTypography';

import useFilteredCategoriesList from './__hooks__/useFilteredCategoriesList';
import { CategoryBlogsCategoriesTypes } from './types';

const CategoryBlogsCategories = ({ categoriesList }: CategoryBlogsCategoriesTypes) => {
  const { breakPoint } = useBreakPoint();
  const { filteredCategoriesList } = useFilteredCategoriesList(categoriesList);

  return (
    <div className="w-full pb-10">
      <CustomTypography
        tagType="h3"
        className="px-4 lg:px-0"
        color={'Neutral_OnBackground'}
        fontSize={breakPoint.laptop ? 'Title_Medium' : 'Headline_Medium'}
      >
        دسته بندی‌ها
      </CustomTypography>

      <BlogsCategories categories={filteredCategoriesList} />
    </div>
  );
};

export default CategoryBlogsCategories;
