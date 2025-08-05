import { useEffect, useState } from 'react';

import CustomSlider from '@components/ui/CustomSlider';
import useTheme from '@hooks/useTheme';

import { WidgetPeriodCycleHistoryDaysProps } from './types';

const WidgetPeriodCycleHistoryDays = ({
  isPdfDownloading,
  periodLength,
  ovulationDay,
  cycleLength,
}: WidgetPeriodCycleHistoryDaysProps) => {
  const { colors } = useTheme();
  const [daysList, setDaysList] = useState<string[]>([]);

  useEffect(() => {
    const list: string[] = [];

    for (let i = 1; i <= cycleLength; i++) {
      let color = '';

      if (i === ovulationDay) {
        color = colors.CalendarWoman_Fertility_Ovulation;
      } else if (i <= periodLength) {
        color = colors.PrimaryWoman_Primary;
      } else {
        color = colors.Neutral_Surface;
      }

      list.push(color);
    }

    setDaysList(list);
  }, []);

  return (
    <CustomSlider gap={isPdfDownloading ? 8 : 4} sidePadding={16} className="min-w-[calc(100%_+_32px)] !pb-0">
      {daysList.map((backgroundColor, index) => (
        <div className="w-[6px] min-w-[6px] h-[16px] rounded" style={{ backgroundColor }} key={index} />
      ))}
    </CustomSlider>
  );
};

export default WidgetPeriodCycleHistoryDays;
