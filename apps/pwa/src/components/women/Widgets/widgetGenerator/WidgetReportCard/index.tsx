import Typography from '@components/ui/Typography';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import ReportGenerator from './ReportGenerator';
import { WidgetReportCardProps } from './types';

const WidgetReportCard = ({ data }: WidgetReportCardProps) => {
  return (
    <WidgetCardContainer title={data.title} button={data.button}>
      <Typography scale="Body" size="Small">
        {data.description}
      </Typography>

      <div className="w-full pt-4 flex flex-col gap-1">
        {data.list.map((item, index) => (
          <ReportGenerator {...item} key={index} />
        ))}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetReportCard;
