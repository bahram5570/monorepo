import { ReplyGeneratorProps } from '../types';

type RepliesTypes = Pick<ReplyGeneratorProps, 'replies'>['replies'][0];
type ItemsTypes = Pick<RepliesTypes, 'selfExperience' | 'likeCount' | 'disliked' | 'state'>;
export interface ReplyGeneratorBottomPartProps extends ItemsTypes {
  id: string;
  userId: string;
  shareId: string;
  commentId: string;
}
