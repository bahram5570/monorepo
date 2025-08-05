import { COLORS_LIST } from '@theme/colors';

import EyeIcon from '@assets/icons/eye.svg';
import RulerIcon from '@assets/icons/ruler.svg';
import WeightIcon from '@assets/icons/weight.svg';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

import PregnancyProgressbar from '../PregnancyProgressbar';
import { ResultModuleTypes } from './types';

const ResultModule = ({ pregnancyDateResult, weeksResult, onReset }: ResultModuleTypes) => {
  const weekImage = `/assets/images/pregnacy-weeks/week${weeksResult.week}.webp`;

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="grid w-full grid-cols-1 mt-4 md:grid-cols-2 gap-4">
        <div className="relative h-[250px] sm:w-[274px] sm:h-[330px] w-full flex justify-center items-center">
          <CustomImage src={weekImage} alt="" fill={true} className="object-contain" />
        </div>

        <div className="flex flex-col justify-center sm:items-baseline items-center h-full gap-3">
          <CustomTypography fontSize="Headline_Small" className="w-full text-center sm:text-start">
            سن بارداری شما:
          </CustomTypography>
          <CustomTypography fontSize="Body_Large" className="w-full text-center sm:text-start">
            {weeksResult.week} هفته و {weeksResult.dayOfWeek} روز است
          </CustomTypography>
          <div className="flex flex-col gap-4 sm:items-start items-center sm:justify-start justify-center w-full">
            <div className="flex flex-row items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex justify-center items-center"
                style={{ background: COLORS_LIST.Surface_SurfaceVariant }}
              >
                <RulerIcon className="w-8 h-auto" style={{ fill: COLORS_LIST.Primary_Primary }} />
              </div>

              <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground">
                قد جنین:
              </CustomTypography>
              <EyeIcon className="w-10 h-auto" style={{ fill: COLORS_LIST.Primary_Primary }} />
            </div>
            <div className="flex flex-row  items-center gap-4">
              <div
                className="w-12 h-12 rounded-full flex justify-center items-center"
                style={{ background: COLORS_LIST.Surface_SurfaceVariant }}
              >
                <WeightIcon className="w-8 h-auto" style={{ fill: COLORS_LIST.Primary_Primary }} />
              </div>

              <CustomTypography fontSize="Title_Small" color="Neutral_OnBackground">
                وزن جنین:
              </CustomTypography>
              <EyeIcon className="w-10 h-auto" style={{ fill: COLORS_LIST.Primary_Primary }} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col sm:flex-row justify-center gap-2 items-center px-4 mt-4 bg-contain rounded-2xl bg-[url(/assets/images/pregnancyDatebackground.webp)] ">
        <CustomTypography fontSize="Headline_Small" className="text-center py-3 sm:py-5">
          تاریخ به دنیا اومدن کوچولوت:
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="text-center py-3 sm:py-5">
          {pregnancyDateResult}
        </CustomTypography>
      </div>
      <PregnancyProgressbar week={weeksResult.week} />
    </div>
  );
};

export default ResultModule;
