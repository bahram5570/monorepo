import { MemoryType } from '../__hooks__/useGetData/type';

export type BtnContainerPropsType = {
  memoryId: string;
  validPartner: boolean | undefined;
  fromMan: boolean;
};

export type CommentPropsType = Pick<MemoryType, 'textPartner' | 'fromMan'> & {
  partnerName: string | undefined;
};
