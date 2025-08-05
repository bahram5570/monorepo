import { LikeInfoTypes } from '../useLikes/types';

export type UpdateReplyHandlerTypes = (
  v: LikeInfoTypes & { shareId: string; commentId: string; replyId: string },
) => void;
