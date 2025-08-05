import { COLORS_LIST } from '@theme/colors';

import CustomTypography from '@components/ui/CustomTypography';

import useProgress from './__hooks__/useProgress';
import { ProgressCycleLoadingProps } from './types';

const ProgressCycleLoading = ({ onComplete }: ProgressCycleLoadingProps) => {
  const { strokeDashoffset, percentage } = useProgress({ onComplete });

  return (
    <div className="relative">
      <div className="relative w-[150px] h-[150px]">
        <svg
          width="150"
          height="150"
          version="1.1"
          viewBox="-25 -25 250 250"
          xmlns="http://www.w3.org/2000/svg"
          style={{ transform: 'rotate(-90deg)' }}
        >
          <circle
            r="90"
            cx="100"
            cy="100"
            fill="transparent"
            strokeWidth="16px"
            strokeDashoffset="0"
            strokeDasharray="565.48px"
            stroke={COLORS_LIST.Surface_OutlineVariant}
          />
          <circle
            r="90"
            cx="100"
            cy="100"
            strokeWidth="16px"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray="565.48px"
            strokeDashoffset={strokeDashoffset}
            stroke={COLORS_LIST.Primary_Primary}
          />
        </svg>

        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <CustomTypography fontSize="Headline_Large" className="scale-75">
            {percentage.toString()}
          </CustomTypography>
        </div>
      </div>
    </div>
  );
};

export default ProgressCycleLoading;
