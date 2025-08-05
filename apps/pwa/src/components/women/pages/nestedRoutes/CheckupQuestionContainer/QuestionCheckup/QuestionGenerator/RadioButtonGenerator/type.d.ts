import { QuestionGeneratorPropsType } from '../type';

type OptionsType = Pick<QuestionGeneratorPropsType, 'options'>['options'][0];

type OptionType = Pick<OptionsType, 'isSelected' | 'label' | 'value'>;

export interface RadioButtonGeneratorPropsType extends OptionType {
  handleChange: (value: number) => void;
}
