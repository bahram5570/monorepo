import Typography from '@components/ui/Typography';
import useOverflowHandler from '@hooks/useOverflowHandler';
import useTheme from '@hooks/useTheme';

import { GenderFilterGeneratorProps } from './types';

const GenderFilterGenerator = ({ value, list, onSelect }: GenderFilterGeneratorProps) => {
  useOverflowHandler();
  const { colors } = useTheme();

  return (
    <>
      <Typography scale="Lable" size="Large" color="Neutral_OnBackground" className="pb-1">
        جنسیت نوزاد:
      </Typography>

      {list.map((item, index) => {
        const isSelected = value === item.value;

        return (
          <div className="w-full flex items-center justify-end gap-2" onClick={() => onSelect(item.value)} key={index}>
            <Typography scale="Body" size="Medium" color="Neutral_OnBackground">
              {item.title}
            </Typography>

            <div
              className="relative w-4 h-4 min-w-4 min-h-4 rounded-full border-[1px] flex items-center justify-center p-[2px]"
              style={{ borderColor: isSelected ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant }}
            >
              {isSelected && (
                <div className="w-full h-full rounded-full" style={{ backgroundColor: colors.PrimaryWoman_Primary }} />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GenderFilterGenerator;
