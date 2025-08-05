import { ShareExperienceNewReplyModalContainerProps } from '../types';

type DataTypes = Pick<ShareExperienceNewReplyModalContainerProps, 'data'>['data'];
type ItemsTypes = Pick<DataTypes, 'name' | 'avatar'>;
export interface NewReplyTopPartProps extends ItemsTypes {
  text: string;
}
