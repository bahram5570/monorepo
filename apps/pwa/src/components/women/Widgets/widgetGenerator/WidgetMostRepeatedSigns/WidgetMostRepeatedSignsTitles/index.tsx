import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';

import { WidgetMostRepeatedSignsTitlesProps } from './types';

const WidgetMostRepeatedSignsTitles = ({
  isPdfDownloading,
  guidDescription,
  description,
  guidTitle,
}: WidgetMostRepeatedSignsTitlesProps) => {
  const guidDescriptionUrl = guidDescription.match(/<(.*?)>/)?.[0];
  const guideImage = guidDescriptionUrl ? guidDescriptionUrl.replace('<[', '').replace(']>', '') : null;
  const guideString = guidDescriptionUrl ? guidDescription.replace(guidDescriptionUrl, '') : guidDescription;

  return (
    <>
      <Typography scale="Body" size="Small" color="Neutral_OnBackground" className="w-full">
        {description}
      </Typography>

      {!isPdfDownloading && (
        <div className="w-full flex items-center justify-end pt-[6px]">
          <Typography scale="Body" size="Small" color="Neutral_OnBackground">
            {guideString}
          </Typography>

          {guideImage && <CustomImage src={guideImage} width={16} height={16} className="pl-[2px]" />}

          <Typography scale="Lable" size="SmallProminet" color="Neutral_OnBackground" className="pl-1">
            {guidTitle}
          </Typography>
        </div>
      )}
    </>
  );
};

export default WidgetMostRepeatedSignsTitles;
