import { WidgetOvulationHistoryCardProps } from '../types';

type PdfTypes = Pick<WidgetOvulationHistoryCardProps, 'isPdfDownloading'>;
type DataTypes = Pick<WidgetOvulationHistoryCardProps, 'data'>['data'];
type DescriptionTypes = Pick<DataTypes, 'description' | 'icon'> & PdfTypes;
export interface WidgetOvulationHistoryCardDescriptionDescriptionProps extends DescriptionTypes {}
