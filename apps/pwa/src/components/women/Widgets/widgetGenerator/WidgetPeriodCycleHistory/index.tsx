import WidgetCardHealthReportContainer from '@components/women/Widgets/WidgetCardHealthReportContainer';

import WidgetPeriodCycleHistoryGuides from './WidgetPeriodCycleHistoryGuides';
import WidgetPeriodCycleHistoryItems from './WidgetPeriodCycleHistoryItems';
import WidgetPeriodCycleHistoryViewAll from './WidgetPeriodCycleHistoryViewAll';
import { WidgetPeriodCycleHistoryProps } from './types';

const WidgetPeriodCycleHistory = ({ data, isPdfDownloading }: WidgetPeriodCycleHistoryProps) => {
  const hasMoreThanThreeItems = isPdfDownloading ? false : data.items.length > 3;
  const itemsList = hasMoreThanThreeItems ? data.items.slice(0, 3) : data.items;

  return (
    <WidgetCardHealthReportContainer title={data.title}>
      <>
        <WidgetPeriodCycleHistoryGuides />
        <WidgetPeriodCycleHistoryItems items={itemsList} isPdfDownloading={isPdfDownloading} />
        {hasMoreThanThreeItems && <WidgetPeriodCycleHistoryViewAll data={data} />}
      </>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetPeriodCycleHistory;
