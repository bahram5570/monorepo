import { WidgetHintCardGeneratorProps } from '../../types';

type ItemsTypes = Pick<WidgetHintCardGeneratorProps, 'isSeen' | 'minReadingDuration' | 'id'>;
export interface UseIsSeenProps extends ItemsTypes {}
