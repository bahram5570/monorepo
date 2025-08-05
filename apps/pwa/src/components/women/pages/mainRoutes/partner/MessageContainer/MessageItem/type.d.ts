import { MessageType } from '../__hooks__/useGetData/type';

export type MessageItemPropsType = Pick<MessageType, 'fromMan' | 'text' | 'createTime'>;
