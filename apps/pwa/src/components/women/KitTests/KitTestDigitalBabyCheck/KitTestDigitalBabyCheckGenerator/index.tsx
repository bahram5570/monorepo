import CheckIcon from '@assets/icons/check.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { KitTestDigitalBabyCheckGeneratorProps } from './types';

const KitTestDigitalBabyCheckGenerator = ({
  selectedDigitalBabyCheckHandler,
  selectedDigitalBabyCheck,
  babyCheckResult,
  title,
  icon,
}: KitTestDigitalBabyCheckGeneratorProps) => {
  const { colors } = useTheme();

  const isSelected = selectedDigitalBabyCheck === babyCheckResult;

  return (
    <div
      className="flex flex-col items-center gap-3  cursor-pointer"
      onClick={() => selectedDigitalBabyCheckHandler(babyCheckResult)}
    >
      <div className="w-[72px] h-[72px] relative flex items-center justify-center">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 rounded-full border-[1px]"
          style={{
            backgroundColor: colors.Surface_SurfaceVariant,
            borderColor: isSelected ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant,
          }}
        />

        {isSelected && (
          <div className="absolute right-0 bottom-0 w-6 h-6 rounded-full " style={{ backgroundColor: colors.White }}>
            <CheckIcon />
          </div>
        )}

        <CustomImage src={icon} width={48} />
      </div>

      <Typography scale="Title" size="Small">
        {title}
      </Typography>
    </div>
  );
};

export default KitTestDigitalBabyCheckGenerator;
