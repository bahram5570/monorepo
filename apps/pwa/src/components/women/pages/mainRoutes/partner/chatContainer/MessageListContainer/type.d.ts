import { ItemPropsType, ResponsePropsType } from '../__hooks__/useGetData/type';

type itemType = Pick<ResponsePropsType, 'partnerAvatar'>;

export interface MessageListContainerPropsType extends itemType {
  messageList: ItemPropsType[];
}
