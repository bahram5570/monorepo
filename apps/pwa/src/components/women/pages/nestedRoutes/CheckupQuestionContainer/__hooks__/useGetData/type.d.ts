import { PregnancyQuestionTypeEnum } from '../../enum';

type InformationType = {
  text: string;
  title: string;
};

type OptionType = { isSelected: boolean; key: string; label: string; value: number };
type QuestionsType = { text: string; options: OptionType[] };

type QuestionType = {
  questions: QuestionsType[];
  title: string;
  type: PregnancyQuestionTypeEnum;
};

type CheckListType = {
  title: string;
  items: string[];
};

type DataType = {
  from: string;
  to: string;
  information: InformationType | null;
  question: QuestionType | null;
  checkList: CheckListType | null;
};
export type ResponsePropsType = {
  data: DataType;
};

export type UseGetDataPropsType = {
  week: number | null;
  type: PregnancyQuestionTypeEnum | null;
};
