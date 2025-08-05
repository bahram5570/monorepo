import { CommentPayloadTypes, RatePayloadTypes } from '../useNewComment/types';

export interface UseNewCommentSubmitTypes {
  articleId: string;
  successHandler: () => void;
}

export type SubmitNewCommentHandlerTypes = (v: {
  ratePayload: RatePayloadTypes;
  commentPayload: CommentPayloadTypes;
}) => void;
