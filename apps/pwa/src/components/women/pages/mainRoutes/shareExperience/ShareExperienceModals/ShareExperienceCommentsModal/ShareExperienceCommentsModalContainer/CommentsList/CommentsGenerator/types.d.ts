import { CommentsResponseTypes } from '../__hooks__/useCommentsList/types';

type CommentTypes = Pick<CommentsResponseTypes, 'comments'>['comments'][0];
export interface CommentsGeneratorProps extends CommentTypes {
  shareId: string;
  isFirstIndex: boolean;
}
