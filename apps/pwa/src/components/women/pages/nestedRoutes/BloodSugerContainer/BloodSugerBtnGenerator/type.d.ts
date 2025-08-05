import { InputValueType } from '../type';

export type BloodSugerBtnGeneratorPropsType = {
  name: keyof InputValueType;
  value: string | number | null;
  label: string;
};
