import { ShareExperienceExperiencesProps } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceExperiences/types';
import { ShareExperienceTopicsProps } from '@components/women/pages/mainRoutes/shareExperience/ShareExperienceContainer/ShareExperienceTopics/type';

export type useGetDataPropsType = {
  // ref: React.RefObject<HTMLDivElement>;
  topicId: string | undefined;
};

export type ExperiencesResponseTypes = {
  totalCount: number;
  id: string;
  coverImage: string;
  inputText: string;
  bio: string;
  prohibtShareExp: boolean;
  name: string;
  image: string;
  expirences: {
    topicName: string;
    isEdit: boolean;
    isPin: boolean;
    text: string;
    image: string;
    id: string;
    isDelete: boolean;
    selfExperience: boolean;
    self: boolean;
    createTime: string;
    avatar: string;
    name: string;
    prohibtComment: boolean;
    approvedProfile: boolean;
    likeCount: number;
    disliked: number;
    commentCount: number;
    state: number;
    userId: string;
    isBookmarked: boolean;
    isFollow: boolean;
  }[];
};

export type QueryExperiencesDataTypes = Pick<ExperiencesResponseTypes, 'expirences'>;

export type ExperiencesDataTypes = QueryExperiencesDataTypes['expirences'];

export type TopicInformationTypes = Pick<ExperiencesResponseTypes, 'coverImage' | 'name' | 'inputText' | 'bio'>;
