import WidgetCardHealthReportContainer from '@components/women/Widgets/WidgetCardHealthReportContainer';

import WidgetPeriodReportCardGuides from './WidgetPeriodReportCardGuides';
import WidgetPeriodReportCardTable from './WidgetPeriodReportCardTable';
import { WidgetPeriodReportCardProps } from './types';

const WidgetPeriodReportCard = ({ data }: WidgetPeriodReportCardProps) => {
  return (
    <WidgetCardHealthReportContainer title={data.title}>
      <>
        <WidgetPeriodReportCardGuides />

        <WidgetPeriodReportCardTable
          min={data.min}
          max={data.max}
          items={data.items}
          cycleLength={data.cycleLength}
          periodLength={data.periodLength}
        />
      </>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetPeriodReportCard;
