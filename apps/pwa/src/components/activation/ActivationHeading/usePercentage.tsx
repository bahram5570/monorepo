import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import { UsePercentageProps } from './types';

const usePercentage = ({ progressPercentage }: UsePercentageProps) => {
  const percentage = progressPercentage === undefined ? 0 : Math.abs(progressPercentage - 100);
  const min = 17; // # Equals to 100%
  const max = 73; // # Equals to 0%
  const interval = max - min;
  const rotate = `-${(percentage * interval) / 100 + min}deg`;

  const maxWidth = MAX_SCREEN_WIDTH + 'px';
  const progressBarSizes = {
    width: `calc(2.2*100dvw)`,
    height: `calc(2.2*100dvw)`,
    maxWidth: `calc(2.2*${maxWidth})`,
    maxHeight: `calc(2.2*${maxWidth})`,
  };

  return { rotate, maxWidth, progressBarSizes };
};

export default usePercentage;
