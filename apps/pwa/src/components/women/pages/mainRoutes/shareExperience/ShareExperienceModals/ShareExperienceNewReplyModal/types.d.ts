type CommentTypes = {
  type: 'comment';
  shareId: string;
};
type ReplyTypes = {
  type: 'reply';
  userId: string;
  shareId: string;
  commentId: string;
};
type ItemsTypes = CommentTypes | ReplyTypes;

export type NewReplyQueriesTypes = ItemsTypes & {
  name: string;
  avatar: string;
};
