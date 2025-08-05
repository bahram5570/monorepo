import { PopUpEditCycleFinishPeriodProps } from '../../types';

type Types = Pick<PopUpEditCycleFinishPeriodProps, 'startTime' | 'periodLength'>;
export interface UseEditCycleDateIntervalsProps extends Types {}

export type DatesIntervalTypes = null | {
  endDate: string;
  startDate: string;
  defaultDate: string;
};
