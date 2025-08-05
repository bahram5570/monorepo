import { WidgetMostRepeatedSignsProps } from '../types';

type DownloadingTypes = Pick<WidgetMostRepeatedSignsProps, 'isPdfDownloading'>;
type DataTypes = Pick<WidgetMostRepeatedSignsProps, 'data'>['data'];
type TitlesTypes = Pick<DataTypes, 'description' | 'guidDescription' | 'guidTitle'> & DownloadingTypes;
export interface WidgetMostRepeatedSignsTitlesProps extends TitlesTypes {}
