import { InstallationPurposeEnum } from '@constants/activation.constants';
import { GoalInfoTypes, SelectedGoalTitleTypes } from '@hooks/__activation__/useGoalFinder/types';

import { PageContainerProps } from '../../PageContainer/types';

type ItmesTypes = Pick<GoalInfoTypes, 'selectedGoalTitle'> & Pick<PageContainerProps, 'payloadHandler'>;
export interface GoalSelectorProps extends ItmesTypes {}

export type GoalsListTypes = { title: SelectedGoalTitleTypes; value: InstallationPurposeEnum }[];

export type SelectHandlerTypes = (v: InstallationPurposeEnum) => void;
