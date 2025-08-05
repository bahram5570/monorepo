import CustomImage from '@components/ui/CustomImage';
import RadioButton from '@components/ui/RadioButton';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { ShareExperienceNewTopicsGeneratorProps } from './types';

const ShareExperienceNewTopicsGenerator = ({
  isFirstIndex,
  isSelected,
  onSelect,
  image,
  name,
}: ShareExperienceNewTopicsGeneratorProps) => {
  const { colors } = useTheme();

  return (
    <div
      onClick={onSelect}
      className="w-full flex items-center justify-between border-t-[1px] py-2 cursor-pointer"
      style={{ borderTopColor: isFirstIndex ? colors.Transparent : colors.Surface_SurfaceVariant }}
    >
      <CustomImage src={image} width={48} className="rounded-full" />

      <div className="flex items-center gap-2">
        <Typography scale="Lable" size="Medium" color="Surface_InverseSurface">
          {name}
        </Typography>

        <RadioButton isChecked={isSelected} />
      </div>
    </div>
  );
};

export default ShareExperienceNewTopicsGenerator;
