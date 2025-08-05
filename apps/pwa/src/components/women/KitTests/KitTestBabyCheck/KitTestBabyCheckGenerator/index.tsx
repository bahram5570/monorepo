import CheckIcon from '@assets/icons/check.svg';

import CustomImage from '@components/ui/CustomImage';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { KitTestBabyCheckGeneratorProps } from './types';

const KitTestBabyCheckGenerator = ({
  selectedBabyCheckHandler,
  selectedBabyCheck,
  babyCheckType,
  title,
  icon,
}: KitTestBabyCheckGeneratorProps) => {
  const { colors } = useTheme();

  const isSelected = selectedBabyCheck === babyCheckType;

  return (
    <div
      className="flex flex-col items-center gap-2  cursor-pointer"
      onClick={() => selectedBabyCheckHandler(babyCheckType)}
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

        <CustomImage src={icon} />
      </div>

      <Typography scale="Body" size="Small">
        {title}
      </Typography>
    </div>
  );
};

export default KitTestBabyCheckGenerator;
