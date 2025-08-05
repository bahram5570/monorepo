import { useEffect } from 'react';

import useCountDown from '@hooks/useCountDown';

import { StepsList } from '../useWelcomingSteps/constants';
import { UseTitlesProps } from './types';

const useTitles = ({ steps, onSteps }: UseTitlesProps) => {
  const { startCounter: startTitle } = useCountDown({
    time: 1,
    onCallBack: () => onSteps(StepsList.SHOW_TITLE),
  });

  const { startCounter: startSubTitle } = useCountDown({
    time: 1,
    onCallBack: () => onSteps(StepsList.SHOW_SUBTITLE),
  });

  useEffect(() => {
    switch (steps) {
      case StepsList.SHOW_ICON:
        startTitle();
        break;

      case StepsList.SHOW_TITLE:
        startSubTitle();
        break;
    }
  }, [steps]);
};

export default useTitles;
