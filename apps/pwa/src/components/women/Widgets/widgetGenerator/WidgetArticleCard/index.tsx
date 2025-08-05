import { externalLink } from '@utils/navigation';

import Button from '@components/ui/Button';
import CustomSlider from '@components/ui/CustomSlider';
import WidgetCardContainer from '@components/women/Widgets/WidgetCardContainer';

import ArticleGenerator from './ArticleGenerator';
import { WidgetArticleCardProps } from './types';

const WidgetArticleCard = ({ data }: WidgetArticleCardProps) => {
  return (
    <WidgetCardContainer title={data.title}>
      <div className="pb-4">
        <CustomSlider>
          {data.items.map((item, index) => (
            <ArticleGenerator image={item.image} link={item.link} title={item.title} key={index} />
          ))}
        </CustomSlider>
      </div>

      <Button variant="fill" size="medium" color="surface" onClick={() => externalLink('https://impo.app/blogs', true)}>
        {data.buttonText}
      </Button>
    </WidgetCardContainer>
  );
};

export default WidgetArticleCard;
