import Typography from '@components/ui/Typography';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';
import useTheme from '@hooks/useTheme';

import WidgetCycleDateCardFertility from './WidgetCycleDateCardFertility';
import WidgetCycleDateCardLabels from './WidgetCycleDateCardLabels';
import WidgetCycleDateCardLatePeriod from './WidgetCycleDateCardLatePeriod';
import WidgetCycleDateCardPeriod from './WidgetCycleDateCardPeriod';
import WidgetCycleDateCardPms from './WidgetCycleDateCardPms';
import WidgetCycleDateCardToday from './WidgetCycleDateCardToday';
import { WidgetCycleDateCardProps } from './types';

const WidgetCycleDateCard = ({ data }: WidgetCycleDateCardProps) => {
  const { colors } = useTheme();

  const percentRatio = 100 / data.cycleLength;

  return (
    <WidgetCardContainer title={data.title}>
      <>
        <WidgetCycleDateCardToday
          currentDayLabel={data.currentDayLabel}
          currentDay={data.currentDay}
          percentRatio={percentRatio}
          isInLatePeriod={data.isInLatePeriod}
        />

        <div
          className="w-full h-[28px] p-[2px] rounded-full "
          style={{ backgroundColor: colors.Surface_SurfaceVariant }}
        >
          <div className="relative w-full h-full flex items-center" style={{ direction: 'rtl' }}>
            <WidgetCycleDateCardPeriod
              startPeriodLable={data.startPeriodLable}
              endPeriodLabel={data.endPeriodLabel}
              percentRatio={percentRatio}
              periodEnd={data.periodEnd}
            />

            <WidgetCycleDateCardFertility
              startFertility={data.startFertility}
              fertilityStart={data.fertilityStart}
              ovulationLabel={data.ovulationLabel}
              endFertility={data.endFertility}
              fertilityEnd={data.fertilityEnd}
              hasFertility={data.hasFertility}
              ovulationDay={data.ovulationDay}
              hasOvulation={data.hasOvulation}
              percentRatio={percentRatio}
            />

            <WidgetCycleDateCardPms
              startPmsLabel={data.startPmsLabel}
              endPmsLabel={data.endPmsLabel}
              percentRatio={percentRatio}
              pmsStart={data.pmsStart}
              pmsEnd={data.pmsEnd}
              hasPms={data.hasPms}
              currentDay={data.currentDay}
              isInLatePeriod={data.isInLatePeriod}
            />

            {data.isInLatePeriod && <WidgetCycleDateCardLatePeriod />}
          </div>
        </div>

        <WidgetCycleDateCardLabels startLabel={data.startLabel} endLabel={data.endLabel} />
      </>
    </WidgetCardContainer>
  );
};

export default WidgetCycleDateCard;
