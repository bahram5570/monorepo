import { CircleContainerProps } from '../types';

type DataTypes = NonNullable<Pick<CircleContainerProps, 'data'>['data']>;
type ItemsTypes = Pick<
  DataTypes,
  | 'cycleLength'
  | 'periodStart'
  | 'periodEnd'
  | 'hasFertility'
  | 'fertilityStart'
  | 'fertilityEnd'
  | 'hasOvulation'
  | 'ovulationDay'
  | 'hasPms'
  | 'pmsStart'
  | 'pmsEnd'
  | 'currentDay'
>;
export interface CircleContainerDaysProps extends ItemsTypes {}

export interface DayGeneratorProps extends Pick<CircleContainerDaysProps, 'cycleLength' | 'currentDay'> {
  day: number;
  color: string;
  ovulationDay?: number;
}

export interface CurrentDayGeneratorProps extends Pick<CircleContainerDaysProps, 'cycleLength' | 'currentDay'> {
  color: string;
}

export interface OvulationGeneratorProps
  extends Pick<CircleContainerDaysProps, 'cycleLength' | 'currentDay' | 'ovulationDay'> {
  color: string;
}
