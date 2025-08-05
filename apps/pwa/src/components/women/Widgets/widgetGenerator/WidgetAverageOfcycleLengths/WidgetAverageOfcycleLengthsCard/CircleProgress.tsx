import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { CircleProgressProps } from './types';

const CircleProgress = ({ length, filledLength, centeralText }: CircleProgressProps) => {
  const { colors } = useTheme();

  const zeroPercent = 471;
  const hundredPercent = 71;
  const totalPercent = zeroPercent - hundredPercent;

  const filledPercent = filledLength / length;
  const resultPercent = -(totalPercent * filledPercent - zeroPercent);

  const sizes = { width: length < 0 ? '64px' : '112px', height: length < 0 ? '64px' : '112px' };

  return (
    <div className="relative -mt-1" style={{ ...sizes }}>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <Typography scale="Title" size="Small" color="Neutral_OnBackground">
          {centeralText}
        </Typography>
      </div>

      <svg viewBox="-21.25 -21.25 212.5 212.5" version="1.1" xmlns="http://www.w3.org/2000/svg" className="-rotate-90">
        <circle
          r="75"
          cx="85"
          cy="85"
          stroke={colors.Neutral_Surface}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDashoffset={hundredPercent}
          fill="transparent"
          strokeDasharray="471px"
        />

        <circle
          r="75"
          cx="85"
          cy="85"
          stroke={colors.PrimaryWoman_Primary}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDashoffset={resultPercent}
          fill="transparent"
          strokeDasharray="471px"
        />
      </svg>
    </div>
  );
};

export default CircleProgress;
