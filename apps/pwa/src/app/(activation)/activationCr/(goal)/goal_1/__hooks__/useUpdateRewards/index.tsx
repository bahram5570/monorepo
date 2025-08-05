import { useEffect, useState } from 'react';

import { GoalNamesEnum } from '@constants/activation.constants';
import useGoalFinder from '@hooks/__activation__/useGoalFinder';

import { UpdatedInfoTypes, UseUpdatedRewardsProps } from './types';

const useUpdatedRewards = ({ info, periodStatus, status }: UseUpdatedRewardsProps) => {
  const [updatedInfo, setUpdatedInfo] = useState<UpdatedInfoTypes>(null);
  const { goalInfo } = useGoalFinder({ status, periodStatus });

  useEffect(() => {
    const copyPageInfo = { ...info };

    switch (goalInfo.selectedGoal) {
      case GoalNamesEnum.INTENTION:
        copyPageInfo.onMountRewardId = 78;
        break;

      case GoalNamesEnum.TRACKER:
        copyPageInfo.onMountRewardId = 79;
        break;

      case GoalNamesEnum.PREGNANCY:
        copyPageInfo.onMountRewardId = 80;
        break;
    }

    setUpdatedInfo(copyPageInfo);
  }, [goalInfo.selectedGoal]);

  return { updatedInfo };
};

export default useUpdatedRewards;
