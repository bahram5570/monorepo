type ExperienceTypes = {
  type: 'experience';
  shareId: string;
};
type CommentTypes = {
  type: 'comment';
  shareId: string;
  commentId: string;
};
type ReplyTypes = {
  type: 'reply';
  shareId: string;
  commentId: string;
  replyId: string;
};
type ItemsTypes = ExperienceTypes | CommentTypes | ReplyTypes;

export type ShareExperienceDeleteModuleProps = ItemsTypes;
