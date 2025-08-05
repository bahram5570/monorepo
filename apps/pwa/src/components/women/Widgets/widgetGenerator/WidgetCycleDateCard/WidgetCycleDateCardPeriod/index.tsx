import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetCycleDateCardPeriodProps } from './types';

const WidgetCycleDateCardPeriod = ({
  startPeriodLable,
  endPeriodLabel,
  percentRatio,
  periodEnd,
}: WidgetCycleDateCardPeriodProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="absolute top-0 bottom-0 flex items-center justify-between h-full px-2 rounded-full"
      style={{
        backgroundColor: colors.PrimaryWoman_Primary,
        width: `${percentRatio * periodEnd}%`,
        right: '0%',
      }}
    >
      <Typography scale="Lable" size="Medium" color="Neutral_Background">
        {startPeriodLable}
      </Typography>

      <Typography scale="Lable" size="Medium" color="Neutral_Background">
        {endPeriodLabel}
      </Typography>
    </div>
  );
};

export default WidgetCycleDateCardPeriod;
