import Typography from '@components/ui/Typography';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import ClinicWidgetGenerator from './ClinicWidgetGenerator';
import { WidgetClinicCardProps } from './types';

const WidgetClinicCard = ({ data }: WidgetClinicCardProps) => {
  return (
    <WidgetCardContainer title={data.title} button={data.button}>
      <div className="flex flex-col items-end">
        <Typography scale="Body" size="Small">
          {data.description}
        </Typography>

        <div className="w-full pt-5 flex flex-col gap-6">
          {data.items.map((item, index) => (
            <ClinicWidgetGenerator {...item} key={index} />
          ))}
        </div>
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetClinicCard;
