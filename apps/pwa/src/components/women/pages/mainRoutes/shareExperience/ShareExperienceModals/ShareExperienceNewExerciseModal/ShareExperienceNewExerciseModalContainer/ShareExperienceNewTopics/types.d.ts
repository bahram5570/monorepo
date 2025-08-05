import { ShareExperienceResponseTypes } from '../../../../ShareExperienceContainer/__hooks__/useShareExperienceGetData/types';
import { TopicIdHandlerTypes, TopicIdTypes } from '../__hooks__/useTopics/types';

type ItemsTypes = Pick<ShareExperienceResponseTypes, 'topics'>['topics'];
export interface ShareExperienceNewTopicsProps {
  isLoading: boolean;
  topicId: TopicIdTypes;
  isSubmitLoading: boolean;
  submitHandler: () => void;
  topicsData: ItemsTypes | undefined;
  topicIdHandler: TopicIdHandlerTypes;
}
