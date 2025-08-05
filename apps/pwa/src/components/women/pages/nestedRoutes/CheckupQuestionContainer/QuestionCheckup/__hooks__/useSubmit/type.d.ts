import { PregnancyQuestionTypeEnum } from '../../../enum';

export type SubmitHandlerPropsType = {
  selectedValues: { [key: string]: number };
  type: PregnancyQuestionTypeEnum;
};

export type ResponsePropsType = {
  message: string;
  status: number;
  valid: boolean;
};
