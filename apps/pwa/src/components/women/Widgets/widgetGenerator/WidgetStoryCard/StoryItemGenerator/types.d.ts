import { WidgetStoryCardProps } from '../types';

type DataTypes = Pick<WidgetStoryCardProps, 'data'>['data']['list'][0];
type ItemsTypes = Pick<DataTypes, 'id' | 'isViewed' | 'coverImage' | 'text'>;
export interface StoryItemGeneratorProps extends ItemsTypes {}
