import { WidgetCycleDateCardProps } from '../types';

type DataTypes = Pick<WidgetCycleDateCardProps, 'data'>['data'];
type FertilityTypes = Pick<
  DataTypes,
  | 'fertilityStart'
  | 'fertilityEnd'
  | 'startFertility'
  | 'endFertility'
  | 'hasFertility'
  | 'hasOvulation'
  | 'ovulationDay'
  | 'ovulationLabel'
>;
export interface WidgetCycleDateCardFertilityProps extends FertilityTypes {
  percentRatio: number;
}
