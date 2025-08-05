import { COLORS_LIST } from '@theme/colors';

import ArrowIcon from '@assets/icons/arrow2.svg';

import { ProgressBarTypes } from './types';

const ProgressBar = ({ onBack, progressPercent, isLoading }: ProgressBarTypes) => {
  return (
    <div className="w-full flex items-center gap-4 pb-10">
      <ArrowIcon
        onClick={onBack}
        className={`w-5 h-auto rotate-90 cursor-pointer ${isLoading ? '!opacity-30' : '!opacity-100'}`}
      />

      <div
        style={{ backgroundColor: COLORS_LIST.Neutral_Surface }}
        className="relative w-full h-1 flex rounded-full overflow-hidden"
      >
        <div
          className="w-full h-full rounded-full"
          style={{ backgroundColor: COLORS_LIST.Primary_Primary, transform: `translateX(${100 - progressPercent}%)` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
