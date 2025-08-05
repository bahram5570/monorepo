import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import CircleProgress from './CircleProgress';
import { WidgetAverageOfcycleLengthsCardProps } from './types';

const WidgetAverageOfcycleLengthsCard = ({
  isPdfDownloading,
  centeralText,
  filledLength,
  description,
  length,
  title,
}: WidgetAverageOfcycleLengthsCardProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full h-fit rounded-2xl flex items-center p-4 pb-1"
      style={{
        backgroundColor: colors.White,
        flexDirection: isPdfDownloading ? 'row' : 'column',
        justifyContent: isPdfDownloading ? 'flex-end' : 'center',
      }}
    >
      <div className="flex flex-col" style={{ alignItems: isPdfDownloading ? 'flex-end' : 'center' }}>
        <Typography scale="Lable" size="Large" color="Neutral_OnBackground">
          {title}
        </Typography>

        <Typography scale="Body" size="Small" color="Neutral_OnBackground" textAlign="center" className="pt-1">
          {description}
        </Typography>
      </div>

      <CircleProgress length={length} filledLength={filledLength} centeralText={centeralText} />
    </div>
  );
};

export default WidgetAverageOfcycleLengthsCard;
