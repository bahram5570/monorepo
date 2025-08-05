import { ShareExperienceStateEnum } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/__hooks__/useExperiences/enum';

import { CommentsListProps } from '../../types';

export type CommentsIdTypes = Pick<CommentsListProps, 'id'>['id'];

export type CommentsRepliesTypes = {
  id: string;
  name: string;
  text: string;
  self: boolean;
  state: number;
  avatar: string;
  userId: string;
  isEdit: boolean;
  disliked: number;
  isDelete: boolean;
  likeCount: number;
  createTime: string;
  selfExperience: boolean;
  approvedProfile: boolean;
}[];

export type CommentsListTypes = {
  id: string;
  text: string;
  name: string;
  image: string;
  userId: string;
  avatar: string;
  isEdit: boolean;
  disliked: number;
  isDelete: boolean;
  likeCount: number;
  createTime: string;
  selfComment: boolean;
  repliesCount: number;
  approvedProfile: boolean;
  replies: CommentsRepliesTypes;
  state: ShareExperienceStateEnum;
}[];

export type CommentsResponseTypes = {
  name: string;
  text: string;
  image: string;
  self: boolean;
  valid: boolean;
  avatar: string;
  userId: string;
  likeCount: number;
  topicName: string;
  isFollow: boolean;
  createTime: string;
  dislikeCount: number;
  commentCount: number;
  isBookmarked: boolean;
  approvedProfile: boolean;
  comments: CommentsListTypes;
  state: ShareExperienceStateEnum;
};
