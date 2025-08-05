import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { BiorhythmItemsPropsType } from './type';

const BiorhythemItems = ({ items }: BiorhythmItemsPropsType) => {
  const { colors } = useTheme();

  return (
    <>
      {items.map((item, index) => {
        const iconUrl = item.icon;
        return (
          <div style={{ backgroundColor: colors.Neutral_Background }} className="rounded-2xl p-3" key={index}>
            <div className="flex flex-col gap-2 items-end">
              <div className="flex gap-2 items-center">
                <Typography scale="Lable" size="Medium">
                  {item.title}
                </Typography>
                <CustomImage src={iconUrl} className="w-10 h-10" />
              </div>
              <Typography scale="Body" size="Small">
                {item.description}
              </Typography>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default BiorhythemItems;
