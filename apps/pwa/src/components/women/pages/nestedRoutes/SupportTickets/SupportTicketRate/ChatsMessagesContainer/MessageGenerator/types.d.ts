import { ItemType } from '../../__hooks__/useGetData/type';
import { ChatsTypes } from '../../__hooks__/useGetData/types';

export interface MessageGeneratorProps extends ItemType {}

export interface ChatContainerMakerProps extends Pick<ChatsTypes, 'dateTime' | 'sideType'> {
  children: React.ReactNode;
  width: number | 'fit-content';
}

export interface MessageGeneratorMediaProps extends Pick<ChatsTypes, 'dateTime' | 'sideType'> {
  media: string;
}
