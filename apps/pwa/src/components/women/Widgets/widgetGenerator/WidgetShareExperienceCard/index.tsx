import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import ShareExperienceGenerator from './ShareExperienceGenerator';
import { WidgetShareExperienceCardProps } from './types';

const WidgetShareExperienceCard = ({ data }: WidgetShareExperienceCardProps) => {
  return (
    <WidgetCardContainer title={data.title} button={data.button}>
      <div className="w-full flex flex-col gap-1">
        {data.items.map((item, index) => (
          <ShareExperienceGenerator {...item} key={index} />
        ))}
      </div>
    </WidgetCardContainer>
  );
};

export default WidgetShareExperienceCard;
