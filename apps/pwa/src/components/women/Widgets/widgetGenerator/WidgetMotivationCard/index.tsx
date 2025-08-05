import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { WidgetMotivationCardProps } from './types';

const WidgetMotivationCard = ({ data }: WidgetMotivationCardProps) => {
  const { colors } = useTheme();

  return (
    <div
      className="w-full px-3 py-2 rounded-xl flex flex-col items-end"
      style={{ backgroundColor: colors.Neutral_Background }}
    >
      <div className="flex gap-2">
        <Typography scale="Lable" size="Medium">
          {data.title}
        </Typography>

        <CustomImage src={data.icon} width={24} height={24} />
      </div>

      <span className="w-full h-[1px] block my-2" style={{ backgroundColor: colors.Neutral_Surface }} />

      <Typography scale="Body" size="Medium">
        {data.description}
      </Typography>
    </div>
  );
};

export default WidgetMotivationCard;
