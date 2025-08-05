import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { OptionButtonProps } from './types';

const OptionButton = ({ isSelected, text, onClick }: OptionButtonProps) => {
  const { colors } = useTheme();

  const backgroundColor = isSelected ? colors.Pink_100 : colors.Surface_SurfaceVariant;
  const borderColor = isSelected ? colors.PrimaryWoman_Primary : colors.Surface_SurfaceVariant;
  const RadioBorderColor = isSelected ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant;

  return (
    <div
      onClick={onClick}
      style={{ backgroundColor, borderColor }}
      className="w-full h-12 flex items-center justify-end gap-2 px-3 border-[1px] rounded-lg cursor-pointer"
    >
      <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
        {text.toString()}
      </Typography>

      <div className="relative w-4 h-4 border-[1px] rounded-full" style={{ borderColor: RadioBorderColor }}>
        {isSelected && (
          <div
            style={{ backgroundColor: colors.PrimaryWoman_Primary }}
            className="absolute top-[2px] left-[2px] right-[2px] bottom-[2px] p-[2px] rounded-full"
          />
        )}
      </div>
    </div>
  );
};

export default OptionButton;
