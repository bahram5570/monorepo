import { GoalNamesEnum } from '@constants/activation.constants';

import { FakeCycleDatesEnums } from '../../enums';

export interface UseSelectDatesProps {
  selectedGoal: GoalNamesEnum;
}

export type FakeCycleDatesHandlerTypes = (v: FakeCycleDatesEnums | null) => void;

export type OpenDatesHandlerTypes = () => void;
