import { ShareExperienceStateEnum } from '../../ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/enum';

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
  replyId: string;
  commentId: string;
};
type ItemsTypes = ExperienceTypes | CommentTypes | ReplyTypes;

export type ShareExperienceLikesModuleProps = ItemsTypes & {
  state: ShareExperienceStateEnum;
  likeCount: number;
  disliked: number;
  isSelf: boolean;
};
