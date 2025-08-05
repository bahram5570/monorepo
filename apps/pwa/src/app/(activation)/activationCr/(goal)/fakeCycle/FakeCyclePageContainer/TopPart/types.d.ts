import { GoalInfoTypes } from '@hooks/__activation__/useGoalFinder/types';

import { PageContainerProps } from '../PageContainer/types';
import { OpenDatesHandlerTypes } from '../__hooks__/useSelectDates/types';

export interface TopPartProps extends Pick<PageContainerProps, 'payloadHandler'> {
  openDatesHandler: OpenDatesHandlerTypes;
  goalInfo: GoalInfoTypes;
}
