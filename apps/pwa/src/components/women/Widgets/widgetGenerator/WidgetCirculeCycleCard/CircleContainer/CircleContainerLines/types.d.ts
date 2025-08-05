import { CircleContainerProps } from '../types';

type DataTypes = NonNullable<Pick<CircleContainerProps, 'data'>['data']>;
type ItemsTypes = Pick<
  DataTypes,
  | 'cycleLength'
  | 'periodStart'
  | 'periodEnd'
  | 'hasPms'
  | 'pmsStart'
  | 'pmsEnd'
  | 'hasFertility'
  | 'fertilityStart'
  | 'fertilityEnd'
>;
export interface CircleContainerLinesProps extends ItemsTypes {
  containerSize: number;
}
