import WidgetCardHealthReportContainer from '@components/women/Widgets/WidgetCardHealthReportContainer';

import WidgetBabyCheckHistoryCardDescription from './WidgetBabyCheckHistoryCardDescription';
import WidgetBabyCheckHistoryCardItems from './WidgetBabyCheckHistoryCardItems';
import WidgetBabyCheckHistoryCardViewAll from './WidgetBabyCheckHistoryCardViewAll';
import { WidgetBabyCheckHistoryCardProps } from './types';

const WidgetBabyCheckHistoryCard = ({ data, isPdfDownloading }: WidgetBabyCheckHistoryCardProps) => {
  const hasMoreThanThreeItems = isPdfDownloading ? false : data.items.length > 3;
  const itemsList = hasMoreThanThreeItems ? data.items.slice(0, 3) : data.items;

  return (
    <WidgetCardHealthReportContainer title={data.title}>
      <>
        <WidgetBabyCheckHistoryCardDescription
          isPdfDownloading={isPdfDownloading}
          description={data.description}
          icon={data.icon}
        />
        <WidgetBabyCheckHistoryCardItems items={itemsList} />
        {!isPdfDownloading && <WidgetBabyCheckHistoryCardViewAll data={data} />}
      </>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetBabyCheckHistoryCard;
