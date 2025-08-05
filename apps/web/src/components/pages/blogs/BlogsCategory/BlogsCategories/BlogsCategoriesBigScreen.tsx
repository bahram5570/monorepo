import { COLORS_LIST } from '@theme/colors';

import { useEffect, useState } from 'react';

import ArrowIcon from '@assets/icons/arrow1.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { BlogsCategoriesBigScreenTypes, UpdatedCategoriesTypes } from './types';

const BlogsCategoriesBigScreen = ({ categories }: BlogsCategoriesBigScreenTypes) => {
  const [updatedCategories, setUpdatedCategories] = useState<UpdatedCategoriesTypes>([]);

  useEffect(() => {
    const list: UpdatedCategoriesTypes = [];

    categories.forEach((item, index) => {
      let cols = 0;

      if (index < 3) {
        cols = 4;
      } else if (index < 7) {
        cols = 3;
      } else if (index < 12) {
        cols = 2;
      } else if (index < 18) {
        cols = 1;
      }

      list.push({ ...item, cols });
    });

    setUpdatedCategories(list);
  }, [categories]);

  return (
    <div className="w-full grid grid-cols-12 gap-x-5 gap-y-6">
      {updatedCategories.map((item, index) => (
        <CustomLink href={`/category/${item.slug}`} style={{ gridColumn: `span ${item.cols}` }} key={index}>
          <div
            className="h-[60px] rounded-xl flex items-center justify-between gap-1 px-5 border-[1px]"
            style={{ borderColor: COLORS_LIST.Surface_OutlineVariant }}
          >
            <CustomTypography fontSize="Title_Small" color={'Surface_InverseSurface'}>
              {item.title}
            </CustomTypography>

            <ArrowIcon className="w-4" style={{ fill: COLORS_LIST.Neutral_OnBackground }} />
          </div>
        </CustomLink>
      ))}
    </div>
  );
};

export default BlogsCategoriesBigScreen;
