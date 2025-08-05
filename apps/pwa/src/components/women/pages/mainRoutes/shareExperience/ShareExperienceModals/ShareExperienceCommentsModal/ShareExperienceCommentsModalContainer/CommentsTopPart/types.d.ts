import { CommentsResponseTypes } from '../CommentsList/__hooks__/useCommentsList/types';
import { ShareExperienceCommentsModalContainerProps } from '../types';

type ItemsTypes = Pick<
  CommentsResponseTypes,
  'approvedProfile' | 'avatar' | 'self' | 'userId' | 'name' | 'createTime' | 'isFollow'
>;
export interface CommentsTopPartProps extends ItemsTypes {
  id: string;
}
