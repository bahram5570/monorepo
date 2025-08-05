import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import { WidgetEmptyReportCardProps } from './types';

const WidgetEmptyReportCard = ({ data }: WidgetEmptyReportCardProps) => {
  return (
    <WidgetCardContainer title={data.title} button={data.button}>
      <div className="flex justify-end">
        <Typography scale="Body" size="Small">
          {data.description}
        </Typography>
      </div>

      <CustomImage src={data.image} className="py-3" />
    </WidgetCardContainer>
  );
};

export default WidgetEmptyReportCard;
