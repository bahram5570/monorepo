import { CycleThemeEnum } from '@services/loginServices/enum';

export type RadioButton = {
  value: CycleThemeEnum;
  title: string;
  imageUrl: string;
};

export type RadioButtonGeneratorPropsType = RadioButton & {
  handleChange: (v: CycleThemeEnum) => void;
  selectedValue: CycleThemeEnum;
};
