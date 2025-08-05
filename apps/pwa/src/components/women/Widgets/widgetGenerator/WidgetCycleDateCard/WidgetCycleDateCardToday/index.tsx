import ArrowIcon from '@assets/icons/filledArrow.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetCycleDateCardTodayProps } from './types';

const WidgetCycleDateCardToday = ({
  currentDay,
  currentDayLabel,
  percentRatio,
  isInLatePeriod,
}: WidgetCycleDateCardTodayProps) => {
  const { colors } = useTheme();
  const currentDayPosition = currentDay * percentRatio;
  const textWidth = isInLatePeriod ? 96 : 'fit-content';

  return (
    <div className="relative h-[40px] w-[calc(100%_-_4px)] mx-auto">
      <div
        style={{ right: `${currentDayPosition > 100 ? 100 : currentDayPosition}%` }}
        className="absolute bottom-1 flex flex-col items-center translate-x-1/2"
      >
        <Typography scale="Lable" size="SmallProminet" color="Surface_InverseSurface" style={{ width: textWidth }}>
          {currentDayLabel}
        </Typography>

        <ArrowIcon className="w-3 pt-[6px]" style={{ fill: colors.Surface_InverseSurface }} />
      </div>
    </div>
  );
};

export default WidgetCycleDateCardToday;
