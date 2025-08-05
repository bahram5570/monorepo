import { WidgetAverageOfcycleLengthsProps } from '../types';

type DownloadingTypes = Pick<WidgetAverageOfcycleLengthsProps, 'isPdfDownloading'>;
type WidgetsTypes = Pick<WidgetAverageOfcycleLengthsProps, 'data'>['data']['left'] & DownloadingTypes;
export interface WidgetAverageOfcycleLengthsCardProps extends WidgetsTypes {}

type ProgressTypes = Pick<WidgetAverageOfcycleLengthsCardProps, 'length' | 'filledLength' | 'centeralText'>;
export interface CircleProgressProps extends ProgressTypes {}
