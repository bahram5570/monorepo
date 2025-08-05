import { ShareExperienceExperiencesProps } from '../../types';
import { ShareExperienceStateEnum } from './enum';

export type SelectedCategoryIdTypes = Pick<ShareExperienceExperiencesProps, 'selectedCategoryId'>['selectedCategoryId'];

export type ExperiencesResponseTypes = {
  groupsTitleText: string;
  otherTitleText: string;
  selfTitleText: string;
  totalCount: number;
  inputText: string;
  text: string;
  expirences: {
    state: ShareExperienceStateEnum;
    approvedProfile: boolean;
    selfExperience: boolean;
    prohibtComment: boolean;
    isBookmarked: boolean;
    commentCount: number;
    createTime: string;
    isFollow: boolean;
    topicName: string;
    likeCount: number;
    disliked: number;
    isEdit: boolean;
    userId: string;
    avatar: string;
    isPin: boolean;
    image: string;
    self: boolean;
    text: string;
    name: string;
    id: string;
  }[];
};

export type QueryExperiencesDataTypes = Pick<ExperiencesResponseTypes, 'expirences'>;

export type ExperiencesDataTypes = QueryExperiencesDataTypes['expirences'];
