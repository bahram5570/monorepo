import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import useProgress from './__hooks__/useProgress';
import { CircleProgressBarProps } from './types';

const CircleProgressBar = ({ loadingStatus, onComplete, circleColor }: CircleProgressBarProps) => {
  const { colors } = useTheme();
  const { strokeDashoffset, percentage } = useProgress({ loadingStatus, onComplete });

  return (
    <div className="relative my-6">
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
          stroke={circleColor || colors.Surface_OutlineVariant}
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
          stroke={colors.PrimaryWoman_Primary}
        />
      </svg>

      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
        <Typography scale="Headline" size="Large" className="scale-75">
          {percentage.toString()}
        </Typography>
      </div>
    </div>
  );
};

export default CircleProgressBar;
