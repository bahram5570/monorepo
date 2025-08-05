import { GoalInfoTypes } from '@hooks/__activation__/useGoalFinder/types';

import { FakeCyclePageContainerProps } from '../types';

export interface PageContainerProps extends Pick<FakeCyclePageContainerProps, 'payloadHandler'> {
  callCreateSampleApi: () => void;
  goalInfo: GoalInfoTypes;
}
