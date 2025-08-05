import { COLORS_LIST } from '@theme/colors';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { BlogsCategoriesSmallScreenTypes } from './types';

const BlogsCategoriesSmallScreen = ({ categories }: BlogsCategoriesSmallScreenTypes) => {
  return (
    <div className="w-full grid grid-cols-2 gap-3 px-4">
      {categories.map((item, index) => {
        const isOdd = index === categories.length - 1 && index % 2 === 0;

        return (
          <CustomLink href={`/category/${item.slug}`} style={{ gridColumn: isOdd ? 'span 2' : 'span 1' }} key={index}>
            <div
              className="w-full h-[40px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
            >
              <CustomTypography fontSize="Lable_Large" color={'Surface_InverseSurface'}>
                {item.title}
              </CustomTypography>
            </div>
          </CustomLink>
        );
      })}
    </div>
  );
};

export default BlogsCategoriesSmallScreen;
