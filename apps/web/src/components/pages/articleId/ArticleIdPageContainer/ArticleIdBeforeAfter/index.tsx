import { COLORS_LIST } from '@theme/colors';

import ArrowIcon from '@assets/icons/arrow2.svg';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { textShorter } from '@utils/scripts';

import { ArticleIdBeforeAfterTypes } from './types';

const ArticleIdBeforeAfter = ({ before, after }: ArticleIdBeforeAfterTypes) => {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between gap-8 md:gap-10">
      <CustomLink href={before.url} className="w-full md:w-[500px]">
        <div
          className="w-full px-6 md:px-10 py-5 md:py-7 rounded-xl flex justify-center gap-6"
          style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
        >
          <ArrowIcon className="w-5 rotate-90" style={{ fill: COLORS_LIST.Surface_Outline }} />

          <div className="w-full flex flex-col gap-2">
            <CustomTypography fontSize="Title_Small" color={'Surface_Outline'}>
              مقاله قبلی
            </CustomTypography>

            <CustomTypography fontSize="Lable_Large">{textShorter(before.title, 34)}</CustomTypography>
          </div>
        </div>
      </CustomLink>

      <CustomLink href={after.url} className="w-full md:w-[500px]">
        <div
          className="w-full px-6 md:px-10 py-5 md:py-7 rounded-xl flex gap-6"
          style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}
        >
          <div className="w-full flex flex-col items-end gap-2">
            <CustomTypography fontSize="Title_Small" color={'Surface_Outline'}>
              مقاله بعدی
            </CustomTypography>

            <CustomTypography fontSize="Lable_Large">{textShorter(after.title, 34)}</CustomTypography>
          </div>

          <ArrowIcon className="w-5 -rotate-90" style={{ fill: COLORS_LIST.Surface_Outline }} />
        </div>
      </CustomLink>
    </div>
  );
};

export default ArticleIdBeforeAfter;
