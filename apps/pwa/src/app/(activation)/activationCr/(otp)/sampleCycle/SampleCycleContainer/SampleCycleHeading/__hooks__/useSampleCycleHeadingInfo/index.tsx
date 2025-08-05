import { GoalNamesEnum } from '@constants/activation.constants';
import useGoalFinder from '@hooks/__activation__/useGoalFinder';
import useTheme from '@hooks/useTheme';

import { UseSampleCycleHeadingInfoProps } from './types';

const useSampleCycleHeadingInfo = ({ payload }: UseSampleCycleHeadingInfoProps) => {
  const { colors } = useTheme();
  const { goalInfo } = useGoalFinder({ periodStatus: payload.periodStatus, status: payload.status });

  let text = '';
  if (goalInfo.selectedGoal === GoalNamesEnum.PREGNANCY) {
    if (payload.isDeliveryDate) {
      text = `تاریخ زایمان وارد شده: ${payload.pregnancyDate}`;
    } else {
      text = `شروع آخرین پریود وارد شده: ${payload.pregnancyDate}`;
    }
  } else {
    text = `شروع آخرین پریود وارد شده: ${payload.startPeriodDate}`;
  }

  const list = {
    [GoalNamesEnum.PREGNANCY]: { text, backgroundColor: colors.Orange_600, textColor: colors.Orange_200 },
    [GoalNamesEnum.INTENTION]: { text, backgroundColor: colors.Cyan_600, textColor: colors.Cyan_200 },
    [GoalNamesEnum.TRACKER]: { text, backgroundColor: colors.Pink_600, textColor: colors.Pink_200 },
  };

  const headingInfo = list[goalInfo.selectedGoal];

  return { headingInfo };
};

export default useSampleCycleHeadingInfo;
