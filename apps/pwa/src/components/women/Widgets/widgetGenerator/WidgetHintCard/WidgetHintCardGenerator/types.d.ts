import { WidgetHintCardProps } from '../types';

type DataTypes = Pick<WidgetHintCardProps, 'data'>['data'];
type ListTypes = DataTypes['list'][0];
type TimeTypes = Pick<DataTypes, 'minReadingDuration'>;
type ItemTypes = ListTypes & TimeTypes;
export interface WidgetHintCardGeneratorProps extends ItemTypes {
  isLastChild: boolean;
}
