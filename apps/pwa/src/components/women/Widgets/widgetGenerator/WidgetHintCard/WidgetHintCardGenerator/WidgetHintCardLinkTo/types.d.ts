import { WidgetHintCardGeneratorProps } from '../types';

type ItemsTypes = Pick<WidgetHintCardGeneratorProps, 'internalLink' | 'externalLink'>;
export interface WidgetHintCardLinkToProps extends ItemsTypes {}
