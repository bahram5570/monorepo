import { ProgressPropsType } from '../useGetData/type';

export type UseSubmitPropsType = { id: string; resetChild: () => void };

export type SubmitResponsePropsType = {
  id: string;
  progress: ProgressPropsType;
};
