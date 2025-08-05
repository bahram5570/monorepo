import { ResponsePropsType } from '../useGetFormData/type';

export type BtnType = Pick<ResponsePropsType, 'btn'>;

export type UseSubmitPropsType = {
  id: string | undefined;
  btn:
    | {
        text: string;
        nextStep: null;
      }
    | undefined;
};

export type SubmitHandlerPropsType = {
  text: string;
  questionText: string;
};
