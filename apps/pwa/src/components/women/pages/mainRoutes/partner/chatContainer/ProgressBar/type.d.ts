import { ResponsePropsType } from '../__hooks__/useGetData/type';

export type ProgressBarPropsType = Pick<ResponsePropsType, 'progress' | 'avatar' | 'partnerAvatar'> & {
  className?: string;
};
