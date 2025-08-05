import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import CircleProgress from './CircleProgress';
import { WidgetPeriodReportEmptyStateCardNotifeProps } from './types';

const WidgetPeriodReportEmptyStateCardNotife = ({
  percent,
  days,
  text,
}: WidgetPeriodReportEmptyStateCardNotifeProps) => {
  const { colors } = useTheme();

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center px-4">
      <div
        className="w-full flex items-center gap-2 px-3 py-2 rounded-xl"
        style={{ backgroundColor: colors.PrimaryWoman_Primary }}
      >
        <Typography scale="Body" size="Medium" color="PrimaryWoman_OnPrimary">
          {text}
        </Typography>

        <CircleProgress days={days} percent={percent} />
      </div>
    </div>
  );
};

export default WidgetPeriodReportEmptyStateCardNotife;
