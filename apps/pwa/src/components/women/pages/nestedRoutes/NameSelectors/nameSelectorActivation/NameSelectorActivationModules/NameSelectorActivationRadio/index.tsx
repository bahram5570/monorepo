import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { NameSelectorActivationRadioProps } from './types';

const NameSelectorActivationRadio = ({
  image,
  title,
  onClick,
  subTitle,
  isSelected,
}: NameSelectorActivationRadioProps) => {
  const { colors } = useTheme();

  return (
    <div className="relative w-full cursor-pointer" style={{ paddingTop: image ? '8px' : '0px' }} onClick={onClick}>
      <div
        className="w-full h-[54px] px-3 rounded-2xl border-[1px] flex items-center gap-2"
        style={{
          backgroundColor: isSelected ? colors.Pink_50 : colors.White,
          borderColor: isSelected ? colors.PrimaryWoman_Primary : colors.Transparent,
        }}
      >
        <div
          className="w-4 h-4 min-w-4 min-h-4 rounded-full flex items-center justify-center border-[1px] p-[2px]"
          style={{ borderColor: isSelected ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant }}
        >
          {isSelected && (
            <div className="w-full h-full rounded-full" style={{ backgroundColor: colors.PrimaryWoman_Primary }} />
          )}
        </div>

        <div className="flex items-center gap-1">
          <Typography scale="Body" size="Medium">
            {title}
          </Typography>

          {isSelected && subTitle && (
            <Typography scale="Body" size="Medium">
              {subTitle}
            </Typography>
          )}
        </div>

        {image && (
          <div className="absolute top-0 left-2 ">
            <CustomImage src={image} className="w-[72px] h-[54px]" />
          </div>
        )}
      </div>
    </div>
  );
};

export default NameSelectorActivationRadio;
