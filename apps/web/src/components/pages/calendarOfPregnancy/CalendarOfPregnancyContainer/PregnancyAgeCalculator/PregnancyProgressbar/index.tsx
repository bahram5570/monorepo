import { COLORS_LIST } from '@theme/colors';

import BabyIcon from '@assets/icons/baby.svg';

interface PregnancyProgressProps {
  week: number;
}

const PregnancyProgressbar = ({ week }: PregnancyProgressProps) => {
  const firstTrimesterEnd = 13;
  const secondTrimesterEnd = 27;
  const thirdTrimesterEnd = 40;

  const getFillPercent = (start: number, end: number) => {
    if (week >= end) return 100;
    if (week < start) return 0;
    return ((week - start + 1) / (end - start + 1)) * 100;
  };

  const firstFill = getFillPercent(1, firstTrimesterEnd);
  const secondFill = getFillPercent(firstTrimesterEnd + 1, secondTrimesterEnd);
  const thirdFill = getFillPercent(secondTrimesterEnd + 1, thirdTrimesterEnd);

  const segment = 32;
  const breakSize = 2;
  let iconPosition = 0;

  if (week <= 13) {
    iconPosition = (week / 13) * segment;
  } else if (week <= 27) {
    iconPosition = segment + breakSize + ((week - 14 + 1) / 14) * segment;
  } else {
    iconPosition = 2 * (segment + breakSize) + ((week - 28 + 1) / 13) * segment;
  }

  return (
    <div className=" p-4 w-full relative mt-4" dir="rtl">
      <div className="flex justify-between text-pink-700 font-bold mb-2">
        <span>سه ماهه سوم</span>
        <span>سه ماهه دوم</span>
        <span>سه ماهه اول</span>
      </div>

      <div
        className="absolute top-10 text-2xl z-10 h-10 w-10 rounded-full flex justify-center items-center  transition-all duration-300"
        style={{ left: `calc(${iconPosition}% - 12px)`, backgroundColor: COLORS_LIST.Primary_Primary }}
        title={`Week ${week}`}
      >
        <BabyIcon className="w-7 h-auto" />
      </div>

      <div className="flex items-center justify-between h-2 mb-6 mt-4 relative" dir="ltr">
        <div className="relative w-[32%] bg-pink-100 rounded h-2 overflow-hidden flex flex-row-reverse" dir="rtl">
          <div className="bg-pink-500 h-full" style={{ width: `${firstFill}%` }} />
        </div>

        <div className="w-[2%]" />

        <div className="relative w-[32%] bg-pink-100 rounded h-2 overflow-hidden flex flex-row-reverse" dir="rtl">
          <div className="bg-pink-500 h-full" style={{ width: `${secondFill}%` }} />
        </div>

        <div className="w-[2%]" />

        <div className="relative w-[32%] bg-pink-100 rounded h-2 overflow-hidden flex flex-row-reverse" dir="rtl">
          <div className="bg-pink-500 h-full" style={{ width: `${thirdFill}%` }} />
        </div>
      </div>
    </div>
  );
};

export default PregnancyProgressbar;
