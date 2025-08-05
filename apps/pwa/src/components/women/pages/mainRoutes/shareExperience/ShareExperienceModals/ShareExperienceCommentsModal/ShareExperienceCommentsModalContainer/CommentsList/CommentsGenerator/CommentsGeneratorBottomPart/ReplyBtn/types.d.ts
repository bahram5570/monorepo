import { NewReplyQueriesTypes } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceModals/ShareExperienceNewReplyModal/types';

export interface ReplyBtnProps extends Pick<NewReplyQueriesTypes, 'name' | 'avatar'> {
  userId: string;
  shareId: string;
  commentId: string;
}
