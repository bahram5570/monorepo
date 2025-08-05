import { Goal1ContainerProps } from '@components/activation/pages/goal/Goal1Container/types';
import { UseGoalFinderProps } from '@hooks/__activation__/useGoalFinder/types';

type InfoTypes = Pick<Goal1ContainerProps, 'info'>;
type ItemsTypes = InfoTypes & UseGoalFinderProps;
export interface UseUpdatedRewardsProps extends ItemsTypes {}

export type UpdatedInfoTypes = InfoTypes['info'] | null;
