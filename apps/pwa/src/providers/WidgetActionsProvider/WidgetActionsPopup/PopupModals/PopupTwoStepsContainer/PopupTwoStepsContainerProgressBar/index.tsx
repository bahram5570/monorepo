import { useEffect, useState } from 'react';

import useTheme from '@hooks/useTheme';

import { PopupTwoStepsContainerProgressBarProps, ProgressBarListTypes } from './types';

const PopupTwoStepsContainerProgressBar = ({ currentStep }: PopupTwoStepsContainerProgressBarProps) => {
  const { colors } = useTheme();
  const [progressBarList, setProgressBarList] = useState<ProgressBarListTypes>([]);

  useEffect(() => {
    const totalSteps = 2;
    const list: ProgressBarListTypes = [];

    for (let i = 1; i < totalSteps + 1; i++) {
      if (i === currentStep) {
        list.push({ width: '50%' });
      } else if (i < currentStep) {
        list.push({ width: '100%' });
      } else {
        list.push({ width: '0%' });
      }
    }

    setProgressBarList(list);
  }, [currentStep]);

  return (
    <div className="flex gap-2 w-full px-10 pb-[72px]" style={{ direction: 'rtl' }}>
      {progressBarList.map((item, index) => (
        <div
          className="w-full h-1 rounded-full overflow-hidden"
          style={{ backgroundColor: colors.Neutral_Background }}
          key={index}
        >
          <div
            className="h-full rounded-full"
            style={{ backgroundColor: colors.PrimaryWoman_Primary, width: item.width }}
          />
        </div>
      ))}
    </div>
  );
};

export default PopupTwoStepsContainerProgressBar;
