import { WidgetHintCardGeneratorProps } from '../types';

type ItemsTypes = Pick<WidgetHintCardGeneratorProps, 'isBookmarked' | 'id'>;
export interface WidgetHintCardBookmarkProps extends ItemsTypes {}

export type ApiInfoTypes = null | { api: string; payload: { id: string }; method: 'POST' | 'DELETE' };
