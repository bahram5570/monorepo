import WidgetCardHealthReportContainer from '@components/women/Widgets/WidgetCardHealthReportContainer';

import WidgetOvulationHistoryCardDescription from './WidgetOvulationHistoryCardDescription';
import WidgetOvulationHistoryCardItems from './WidgetOvulationHistoryCardItems';
import WidgetOvulationHistoryCardViewAll from './WidgetOvulationHistoryCardViewAll';
import { WidgetOvulationHistoryCardProps } from './types';

const WidgetOvulationHistoryCard = ({ data, isPdfDownloading }: WidgetOvulationHistoryCardProps) => {
  const hasMoreThanThreeItems = isPdfDownloading ? false : data.items.length > 3;
  const itemsList = hasMoreThanThreeItems ? data.items.slice(0, 3) : data.items;

  return (
    <WidgetCardHealthReportContainer title={data.title}>
      <>
        <WidgetOvulationHistoryCardDescription
          isPdfDownloading={isPdfDownloading}
          description={data.description}
          icon={data.icon}
        />
        <WidgetOvulationHistoryCardItems items={itemsList} />
        {!isPdfDownloading && <WidgetOvulationHistoryCardViewAll data={data} />}
      </>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetOvulationHistoryCard;
