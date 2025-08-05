import { MarhaamFeelingEnum } from './enum';

export type MarhaamQuestionTypes = {
  feeling: { mainTitle: string; type: 'option' } & {
    list: { title: string; value: MarhaamFeelingEnum; description: string }[];
  };
};

export type MarhaamResultTypes = {
  feeling: MarhaamFeelingEnum;
};
