import { GoalInfoTypes } from '@hooks/__activation__/useGoalFinder/types';

import { OpenDatesHandlerTypes } from '../__hooks__/useSelectDates/types';

export interface BottomPartProps extends Pick<GoalInfoTypes, 'selectedGoal'> {
  openDatesHandler: OpenDatesHandlerTypes;
}
