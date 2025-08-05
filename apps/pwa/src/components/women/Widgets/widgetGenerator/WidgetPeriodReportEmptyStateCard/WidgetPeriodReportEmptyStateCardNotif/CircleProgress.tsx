import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { CircleProgressProps } from './types';

const CircleProgress = ({ days, percent }: CircleProgressProps) => {
  const { colors } = useTheme();

  const zeroPercent = 471;
  const hundredPercent = 71;
  const totalPercent = zeroPercent - hundredPercent;

  const filledPercent = percent > 0 ? percent : 0.01;
  const resultPercent = -(totalPercent * filledPercent - zeroPercent);

  return (
    <div
      className="relative w-[48px] h-[48px] min-w-[48px] min-h-[48px] overflow-hidden flex items-center justify-center rounded-full"
      style={{ backgroundColor: colors.White }}
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <Typography scale="Lable" size="Small" color="Black">
          {`${days} روز`}
        </Typography>
      </div>

      <svg
        viewBox="-21.25 -21.25 212.5 212.5"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        className="-rotate-45 min-w-[60px] min-h-[60px]"
      >
        <circle
          r="75"
          cx="85"
          cy="85"
          strokeWidth="12"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray="471px"
          strokeDashoffset={resultPercent}
          stroke={colors.PrimaryWoman_Primary}
        />
      </svg>
    </div>
  );
};

export default CircleProgress;
