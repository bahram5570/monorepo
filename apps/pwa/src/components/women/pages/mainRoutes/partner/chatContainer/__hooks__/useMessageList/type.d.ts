import { ResponsePropsType } from '../useGetData/type';
import { SubmitResponsePropsType } from '../useSubmit/type';

export type UseMessageListPropsType = {
  data: ResponsePropsType | undefined;
  newMessageData: SubmitResponsePropsType | undefined;
  submitLoading: boolean;
};
