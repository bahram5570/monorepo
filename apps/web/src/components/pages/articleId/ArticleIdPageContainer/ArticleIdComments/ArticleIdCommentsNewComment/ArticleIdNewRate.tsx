import { COLORS_LIST } from '@theme/colors';

import StarIcon from '@assets/icons/star.svg';
import CustomTypography from '@components/ui/CustomTypography';

import { ArticleIdNewRateTypes } from './types';

const ArticleIdNewRate = ({ rate, rateHandler }: ArticleIdNewRateTypes) => {
  const starList = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="w-full flex items-center justify-center gap-3">
        {starList.map((no) => {
          const isSelected = no <= rate;

          return (
            <StarIcon
              key={no}
              className="w-6 cursor-pointer"
              onClick={() => rateHandler(no)}
              style={{
                fill: isSelected ? COLORS_LIST.Yellow : COLORS_LIST.Transparent,
                stroke: isSelected ? COLORS_LIST.Transparent : COLORS_LIST.Surface_Outline,
              }}
            />
          );
        })}
      </div>

      <div className="w-fit flex justify-between gap-20">
        <CustomTypography fontSize="Body_Small">خیلی کم</CustomTypography>
        <CustomTypography fontSize="Body_Small">خیلی زیاد</CustomTypography>
      </div>
    </div>
  );
};

export default ArticleIdNewRate;
