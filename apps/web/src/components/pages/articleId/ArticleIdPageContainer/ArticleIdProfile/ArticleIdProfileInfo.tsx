import { COLORS_LIST } from '@theme/colors';

import CommentIcon from '@assets/icons/comment.svg';
import LikeIcon from '@assets/icons/like.svg';
import CustomTypography from '@components/ui/CustomTypography';
import { jalaaliScriptDate, toJalaliData } from '@utils/dates';

import { ArticleIdProfileInfoTypes } from './types';

const WPM = 200;

const ArticleIdProfileInfo = ({ commentCount, publishTime, rateCount, wordsCount }: ArticleIdProfileInfoTypes) => {
  const jalaliPublishTime = jalaaliScriptDate(toJalaliData(publishTime)).split(' ');
  const publishTimeScript = `${jalaliPublishTime[1]} ${jalaliPublishTime[2]}`;

  const readingTime = (no: number) => {
    const avrage = Math.ceil(no / WPM);

    if (avrage <= 1) {
      return '1 دقیقه';
    } else if (avrage > 60) {
      const hours = Math.floor(avrage / 60);
      const minutes = avrage % 60;

      return `${hours} ساعت و ${minutes} دقیقه`;
    } else {
      return `${avrage} دقیقه`;
    }
  };

  return (
    <div className="w-fit flex items-center justify-between pr-[76px] md:pr-0">
      <div className="flex items-center gap-2 md:gap-4">
        <CustomTypography fontSize="Body_Small" color={'Surface_Outline'}>
          {readingTime(wordsCount)}
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" color={'Surface_Outline'}>
          .
        </CustomTypography>

        <CustomTypography fontSize="Body_Small" color={'Surface_Outline'}>
          {publishTimeScript}
        </CustomTypography>

        <div className="gap-4 hidden md:flex">
          <div className="flex items-center gap-2">
            <LikeIcon className="w-[14px]" style={{ fill: COLORS_LIST.Surface_Outline }} />
            <CustomTypography fontSize="Body_Small">{rateCount}</CustomTypography>
          </div>

          <div className="flex items-center gap-2">
            <CommentIcon className="w-[14px]" style={{ fill: COLORS_LIST.Surface_Outline }} />
            <CustomTypography fontSize="Body_Small">{commentCount}</CustomTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleIdProfileInfo;
