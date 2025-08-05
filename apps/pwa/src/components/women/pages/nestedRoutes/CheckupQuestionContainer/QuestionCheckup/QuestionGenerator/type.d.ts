import { QuestionType, QuestionsType } from '../../__hooks__/useGetData/type';

export type OptionType = Pick<QuestionsType, 'options' | 'text'>;

export interface QuestionGeneratorPropsType extends OptionType {
  handleSelectionChange: (key: string, selectedValue: number) => void;
}
