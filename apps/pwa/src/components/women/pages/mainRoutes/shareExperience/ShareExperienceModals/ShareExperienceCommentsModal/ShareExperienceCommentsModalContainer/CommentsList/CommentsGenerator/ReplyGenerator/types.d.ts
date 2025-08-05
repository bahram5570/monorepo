import { CommentsGeneratorProps } from '../types';

type ItemsTypes = Pick<CommentsGeneratorProps, 'replies' | 'repliesCount' | 'userId'>;
export interface ReplyGeneratorProps extends ItemsTypes {
  shareId: string;
  commentId: string;
  commentName: string;
}
