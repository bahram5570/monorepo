import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import PregnancyCheckupItem from './PregnancyCheckupItem';
import { WidgetPregnancyCheckupPropsTypes } from './type';

const WidgetPregnancyCheckup = ({ data }: WidgetPregnancyCheckupPropsTypes) => {
  return (
    <WidgetCardContainer title={data.title} button={data.button}>
      <div className="flex flex-col gap-2">
        {data.items.map((item, index) => {
          return <PregnancyCheckupItem {...item} key={index} />;
        })}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetPregnancyCheckup;
