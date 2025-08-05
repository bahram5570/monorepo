import { LikeInfoTypes } from '../useLikes/types';

export type UpdateCommentHandlerTypes = (v: LikeInfoTypes & { shareId: string; commentId: string }) => void;
