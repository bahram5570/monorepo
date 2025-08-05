import NeedToInvestigateIcon from '@assets/icons/needToInvestigate.svg';

import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import WidgetPeriodCycleHistoryDays from './WidgetPeriodCycleHistoryDays';
import { WidgetPeriodCycleHistoryItemsProps } from './types';

const WidgetPeriodCycleHistoryItems = ({ items, isPdfDownloading }: WidgetPeriodCycleHistoryItemsProps) => {
  const { colors } = useTheme();

  return (
    <div className="w-full flex flex-col items-center">
      {items.map((item, index) => {
        const isLastChild = items.length - 1 === index;

        return (
          <div
            className="w-full flex flex-col items-center gap-3 py-4 border-y-[1px] border-t-transparent"
            style={{ borderBottomColor: isLastChild ? colors.Transparent : colors.Neutral_Surface }}
            key={index}
          >
            <div className="flex items-center gap-1 ml-auto">
              {!item.normal && <NeedToInvestigateIcon className="w-5 h-auto" />}

              <Typography scale="Lable" size="SmallProminet" color="Neutral_OnBackground">
                {item.title}
              </Typography>
            </div>

            <WidgetPeriodCycleHistoryDays
              cycleLength={item.cycleLength}
              ovulationDay={item.ovulationDay}
              periodLength={item.periodLength}
              isPdfDownloading={isPdfDownloading}
            />

            <div className="flex items-center gap-1 ml-auto">
              <Typography scale="Body" size="Small" color="Surface_InverseSurface">
                {` - طول دوره: ${item.cycleLength} روز`}
              </Typography>

              <Typography scale="Body" size="Small" color="Surface_InverseSurface">
                {`طول پریود: ${item.periodLength} روز`}
              </Typography>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WidgetPeriodCycleHistoryItems;
