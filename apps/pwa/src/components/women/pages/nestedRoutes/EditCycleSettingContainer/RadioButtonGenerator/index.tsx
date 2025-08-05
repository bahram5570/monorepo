import CustomImage from '@components/ui/CustomImage';
import RadioButton from '@components/ui/RadioButton';
import Typography from '@components/ui/Typography';
import useTheme from '@hooks/useTheme';

import { RadioButtonGeneratorPropsType } from '../type';

const RadioButtonGenerator = ({
  imageUrl,
  title,
  value,
  selectedValue,
  handleChange,
}: RadioButtonGeneratorPropsType) => {
  const { colors } = useTheme();

  return (
    <div
      onClick={() => handleChange(value)}
      className="w-full rounded-2xl flex flex-col items-center justify-between gap-3 pt-4 px-4"
      style={{
        border: `1px solid ${selectedValue === value ? colors.PrimaryWoman_Primary : colors.Surface_OutlineVariant}`,
        background: colors.Neutral_Background,
      }}
    >
      <div className="w-full flex flex-col  gap-3 cursor-pointer">
        <div className="flex flex-row-reverse items-center">
          <RadioButton isChecked={selectedValue === value} />

          {selectedValue === value ? (
            <Typography scale="Lable" size="Medium">
              {title}
            </Typography>
          ) : (
            <Typography scale="Body" size="Medium">
              {title}
            </Typography>
          )}
        </div>
        <div
          className="flex justify-center items-center w-full "
          style={{ borderTop: `1px solid ${colors.Surface_OutlineVariant}` }}
        >
          <CustomImage src={imageUrl} className="mt-3" />
        </div>
      </div>
    </div>
  );
};

export default RadioButtonGenerator;
