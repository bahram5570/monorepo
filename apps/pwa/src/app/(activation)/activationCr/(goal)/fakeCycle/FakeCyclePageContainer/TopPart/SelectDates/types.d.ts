import { GoalInfoTypes } from '@hooks/__activation__/useGoalFinder/types';

import { TopPartProps } from '../types';

export type SelectDatesProps = Pick<
  GoalInfoTypes,
  'selectDatesTopText' | 'selectDatesTopIcon' | 'selectDatesBtnText' | 'selectDatesBottomIcon' | 'selectDatesBottomText'
> &
  Pick<TopPartProps, 'openDatesHandler'> & { isPregnancy: boolean };

export interface SelectDatesTableProps
  extends Omit<
    SelectDatesProps,
    'fakeCycleDatesHandler' | 'fakeCycleDatesHandler' | 'selectDatesBtnText' | 'openDatesHandler'
  > {}
