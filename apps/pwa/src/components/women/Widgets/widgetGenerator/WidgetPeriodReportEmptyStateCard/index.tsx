import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import WidgetCardHealthReportContainer from '@components/women/Widgets/WidgetCardHealthReportContainer';

import WidgetPeriodReportEmptyStateCardGuides from './WidgetPeriodReportEmptyStateCardGuides';
import WidgetPeriodReportEmptyStateCardNotif from './WidgetPeriodReportEmptyStateCardNotif';
import { WidgetPeriodReportEmptyStateCardProps } from './types';

const WidgetPeriodReportEmptyStateCard = ({ data }: WidgetPeriodReportEmptyStateCardProps) => {
  return (
    <WidgetCardHealthReportContainer title={data.title}>
      <Typography scale="Body" size="Small">
        {data.description}
      </Typography>

      <WidgetPeriodReportEmptyStateCardGuides />

      <div className="relative w-full min-h-[170px]">
        <CustomImage src={data.image} className="pb-4" />
        <WidgetPeriodReportEmptyStateCardNotif days={data.days} percent={data.percent} text={data.text} />
      </div>
    </WidgetCardHealthReportContainer>
  );
};

export default WidgetPeriodReportEmptyStateCard;
