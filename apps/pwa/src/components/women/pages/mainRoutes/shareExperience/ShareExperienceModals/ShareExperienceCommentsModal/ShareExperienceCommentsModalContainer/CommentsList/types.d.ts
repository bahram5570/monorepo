import { ShareExperienceCommentsModalContainerProps } from '../types';
import { CommentsResponseTypes } from './__hooks__/useCommentsList/types';

export interface CommentsListProps extends Pick<CommentsResponseTypes, 'comments'> {
  id: string;
}
