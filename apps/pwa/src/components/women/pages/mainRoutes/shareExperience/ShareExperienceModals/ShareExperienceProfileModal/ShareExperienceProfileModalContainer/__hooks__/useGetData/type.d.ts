import { ExperiencesResponseTypes } from '../../../../ShareExperienceTopicModal/ShareExperienceTopicModalContainer/__hooks__/useGetData/type';

type ExperienceType = Pick<ExperiencesResponseTypes, 'expirences'>['expirences'][0];

type SelfTypes = ExperienceType & {
  isDelete: boolean;
  biography: string;
};

export type ShareExperenceProfileResponsePropsType = {
  storyCount: number;
  isNotificationActive: boolean;
  notificationActivationMessage: string;
  topicsTitleText: string;
  selfTitleText: string;
  activitiesTitleText: string;
  isSelf: boolean;
  usernameHintText: string;
  isDr: boolean;
  self: SelfTypes[];
  activities: ExperienceType[];
  showMoreActivity: boolean;
  showMoreStory: boolean;
  isFollow: boolean;
  profile: {
    id: string;
    username: string;
    expertise: string;
    biography: string;
    avatarImage: string;
    avatars: string[];
    selectedIndex: number;
  };
  followCount: {
    followerCount: number;
    followingCount: number;
  };
};
