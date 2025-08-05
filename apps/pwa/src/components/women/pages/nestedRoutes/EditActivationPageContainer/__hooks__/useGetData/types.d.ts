import { EditActivationInitStrategyEnum } from './enum';

export type EditActivationOptionsTypes = { title: string; value: number; optionStrategy: EditActivationOptionsEnum };

export type EditActivationQuestionsTypes = {
  title: string;
  keyName: string;
  description: string;
  defaultValue: number;
  options: EditActivationOptionsTypes[];
  initStrategy: EditActivationInitStrategyEnum;
};

export type EditActivationResponseTypes = {
  questions: EditActivationQuestionsTypes[];
};
