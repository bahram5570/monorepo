import { ReplyGeneratorProps } from '../types';

type ReplyTypes = Pick<ReplyGeneratorProps, 'replies'>['replies'][0];
type ItemsTypes = Pick<ReplyTypes, 'createTime' | 'approvedProfile' | 'name' | 'avatar' | 'selfExperience' | 'userId'>;
export interface ReplyGeneratorTopPartProps extends ItemsTypes {}
