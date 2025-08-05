import { ItemPropsType, ResponsePropsType } from '../../__hooks__/useGetData/type';

export type MessagePropsType = Pick<ResponsePropsType, 'partnerAvatar'> &
  Pick<ItemPropsType, 'createTime' | 'side' | 'text' | 'id'>;
