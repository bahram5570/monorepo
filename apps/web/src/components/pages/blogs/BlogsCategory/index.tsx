'use client';

import useBreakPoint from '@hooks/useBreakPoint';

import CustomTypography from '@components/ui/CustomTypography';

import BlogsCategories from './BlogsCategories';
import { BlogsCategoryTypes } from './types';

const BlogsCategory = ({ categories }: BlogsCategoryTypes) => {
  const { breakPoint } = useBreakPoint();

  return (
    <div className="w-full lg:w-10/12 md:max-w-full mx-auto">
      <CustomTypography
        className="px-4 lg:px-0"
        color={'Neutral_OnBackground'}
        fontSize={breakPoint.laptop ? 'Title_Medium' : 'Headline_Medium'}
      >
        دسته بندی‌ها
      </CustomTypography>

      <BlogsCategories categories={categories} />
    </div>
  );
};

export default BlogsCategory;
