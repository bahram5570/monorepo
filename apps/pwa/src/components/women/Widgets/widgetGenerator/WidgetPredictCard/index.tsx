import CustomSlider from '@components/ui/CustomSlider';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import PredictGenerator from './PredictGenerator';
import { WidgetPredictCardProps } from './types';

const WidgetPredictCard = ({ data }: WidgetPredictCardProps) => {
  return (
    <WidgetCardContainer title={data.title}>
      <CustomSlider gap={10}>
        {data.items.map((item, index) => (
          <PredictGenerator {...item} key={index} />
        ))}
      </CustomSlider>
    </WidgetCardContainer>
  );
};

export default WidgetPredictCard;
