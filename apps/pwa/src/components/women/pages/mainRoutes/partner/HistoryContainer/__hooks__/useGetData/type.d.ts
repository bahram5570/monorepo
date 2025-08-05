import { ProgressPropsType } from '../../../chatContainer/__hooks__/useGetData/type';

export type ItemPropsType = {
  text: string;
  id: string;
  manAvatar: string;
  womanAvatar: string;
  title: string;
  description: string;
  progress: ProgressPropsType;
};

export type ResponsePropsType = {
  title: string;
  totalCount: number;
  items: ItemPropsType[];
};

export type ChallengeDataPropsType = Pick<ResponsePropsType, 'items'>;
