import { WidgetCycleDateCardProps } from '../types';

type DataTypes = Pick<WidgetCycleDateCardProps, 'data'>['data'];
type LabelsTypes = Pick<DataTypes, 'startLabel' | 'endLabel'>;
export interface WidgetCycleDateCardLabelsProps extends LabelsTypes {}
