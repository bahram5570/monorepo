import { CommentsResponseTypes } from '../CommentsList/__hooks__/useCommentsList/types';
import { ShareExperienceCommentsModalContainerProps } from '../types';

type ItemsTypes = Pick<
  CommentsResponseTypes,
  'self' | 'isBookmarked' | 'commentCount' | 'state' | 'likeCount' | 'dislikeCount'
>;
export interface CommentsBottomPartProps extends ItemsTypes {
  id: string;
}
