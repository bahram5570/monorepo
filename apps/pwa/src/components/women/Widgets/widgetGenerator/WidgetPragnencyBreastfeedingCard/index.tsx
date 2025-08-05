import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import PragnencyBreastfeedingGenerator from './PragnencyBreastfeedingGenerator';
import { WidgetPragnencyBreastfeedingCardProps } from './types';

const WidgetPragnencyBreastfeedingCard = ({ data }: WidgetPragnencyBreastfeedingCardProps) => {
  const { colors } = useTheme();

  const backgroundColor = colors.Neutral_Background.toLowerCase() + 'b3';

  return (
    <div className="flex flex-col gap-2 w-full py-2 px-3 rounded-xl" style={{ backgroundColor }}>
      <div className="flex gap-3 justify-center items-center">
        <div className="flex flex-col items-end gap-2 w-full pt-5">
          <Typography scale="Title" size="Small">
            {data.title}
          </Typography>

          <Typography scale="Body" size="Medium" color="Surface_Outline">
            {data.description}
          </Typography>

          <div className="w-full h-[1px] block" style={{ backgroundColor: colors.Neutral_Surface }} />

          {data.tiles.map((item, index) => (
            <PragnencyBreastfeedingGenerator {...item} key={index} />
          ))}
        </div>

        <CustomImage src={data.image} width={150} objectFit="cover" />
      </div>

      <div className="w-full h-[1px] block" style={{ backgroundColor: colors.Neutral_Surface }} />

      <div className="flex items-center justify-end gap-2">
        <Typography scale="Lable" size="Large">
          {data.trailing}
        </Typography>

        {data.trailingIcon && <CustomImage src={data.trailingIcon} width={56} className="rounded-full" />}
      </div>
    </div>
  );
};

export default WidgetPragnencyBreastfeedingCard;
