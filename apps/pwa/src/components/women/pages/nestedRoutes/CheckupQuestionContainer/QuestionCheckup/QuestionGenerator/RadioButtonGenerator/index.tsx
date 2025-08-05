import RadioButton from '@components/ui/RadioButton';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RadioButtonGeneratorPropsType } from './type';

const RadioButtonGenerator = ({ isSelected, label, value, handleChange }: RadioButtonGeneratorPropsType) => {
  const { colors } = useTheme();

  return (
    <div
      onClick={() => handleChange(value)}
      className="w-full rounded-lg flex flex-col justify-between gap-3 py-2 px-3"
      style={{
        background: isSelected ? colors.PrimaryWoman_PrimaryContainer : colors.Surface_SurfaceVariant,
      }}
    >
      <div className="w-full flex flex-col  justify-between gap-3 cursor-pointer">
        <div className="flex flex-row-reverse items-center">
          <RadioButton isChecked={isSelected} onClick={() => {}} />

          <Typography scale="Body" size="Medium">
            {label}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonGenerator;
