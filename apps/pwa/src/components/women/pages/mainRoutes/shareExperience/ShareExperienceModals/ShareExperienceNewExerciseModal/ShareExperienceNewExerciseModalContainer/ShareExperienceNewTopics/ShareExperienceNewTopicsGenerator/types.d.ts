import { ShareExperienceNewTopicsProps } from '../types';

type TopicTypes = Pick<ShareExperienceNewTopicsProps, 'topicsData'>['topicsData'][0];
type ItemsTypes = Pick<TopicTypes, 'name' | 'image'>;
export interface ShareExperienceNewTopicsGeneratorProps extends ItemsTypes {
  isSelected: boolean;
  onSelect: () => void;
  isFirstIndex: boolean;
}
