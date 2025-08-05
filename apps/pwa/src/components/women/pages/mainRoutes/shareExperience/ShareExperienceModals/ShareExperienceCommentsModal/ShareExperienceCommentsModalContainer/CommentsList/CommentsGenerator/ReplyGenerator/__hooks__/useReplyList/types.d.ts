import { ReplyGeneratorProps } from '../../types';

export interface UseReplyListProps
  extends Pick<ReplyGeneratorProps, 'replies' | 'repliesCount' | 'commentId' | 'shareId'> {}

type RepliesListTypes = Pick<UseReplyListProps, 'replies'>['replies'];

export type DataRepliesListTypes = { repliesList: RepliesListTypes };

export type RepliesListResponseTypes = {
  valid: boolean;
  totalCount: number;
  replies: RepliesListTypes;
};
