import {
  CommentsListTypes,
  CommentsRepliesTypes,
} from '../../../../ShareExperienceCommentsModal/ShareExperienceCommentsModalContainer/CommentsList/__hooks__/useCommentsList/types';
import { NewReplyQueriesTypes } from '../../../types';

export interface UseSubmitProps {
  text: string;
  data: NewReplyQueriesTypes;
}

export type NewCommentMakerTypes = (props: {
  commentId: string;
  shareId: string;
  avatar: string;
  text: string;
  name: string;
}) => CommentsListTypes[0];

export type NewReplyResponseTypes = {
  reply: CommentsRepliesTypes[0];
};

export type NewCommentResponseTypes = {
  commentId: string;
};
