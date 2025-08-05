import { GoalInfoTypes } from '@hooks/__activation__/useGoalFinder/types';

import { BottomPartDataTypes, PredictFooterTypes } from '../__hooks__/useBottomPartData/types';
import { BottomPartProps } from '../types';

export type PredictCardsProps = Pick<GoalInfoTypes, 'selectedGoal'> &
  Pick<BottomPartProps, 'openDatesHandler'> & { bottomPartData: BottomPartDataTypes };

export type PredictFooterProps = PredictFooterTypes &
  Pick<PredictCardsProps, 'openDatesHandler'> & {
    isPregnancy?: boolean;
  };
