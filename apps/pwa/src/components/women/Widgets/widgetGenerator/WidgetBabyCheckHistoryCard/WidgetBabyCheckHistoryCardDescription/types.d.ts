import { WidgetBabyCheckHistoryCardProps } from '../types';

type PdfTypes = Pick<WidgetBabyCheckHistoryCardProps, 'isPdfDownloading'>;
type DataTypes = Pick<WidgetBabyCheckHistoryCardProps, 'data'>['data'];
type DescriptionTypes = Pick<DataTypes, 'description' | 'icon'> & PdfTypes;
export interface WidgetBabyCheckHistoryCardDescriptionProps extends DescriptionTypes {}
