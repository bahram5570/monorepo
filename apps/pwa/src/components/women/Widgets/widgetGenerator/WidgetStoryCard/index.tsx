import CustomSlider from '@components/ui/CustomSlider';
import Typography from '@components/ui/Typography';

import StoryItemGenerator from './StoryItemGenerator';
import StoryPreview from './StoryPreview';
import useStoryCardData from './__hooks__/useStoryCardData';
import { WidgetStoryCardProps } from './types';

const WidgetStoryCard = ({ data: originalStoryData }: WidgetStoryCardProps) => {
  const { data } = useStoryCardData(originalStoryData);

  if (!data) {
    return <></>;
  }

  return (
    <div className="flex flex-col items-end -mx-4 px-3">
      <Typography scale="Title" size="Small" className="px-4 mb-2">
        {data.title}
      </Typography>

      <CustomSlider sidePadding={16} className="items-start">
        {data.list.map((item, index) => (
          <StoryItemGenerator
            coverImage={item.coverImage}
            isViewed={item.isViewed}
            text={item.text}
            id={item.id}
            key={index}
          />
        ))}
      </CustomSlider>

      <StoryPreview list={data.list} />
    </div>
  );
};

export default WidgetStoryCard;
