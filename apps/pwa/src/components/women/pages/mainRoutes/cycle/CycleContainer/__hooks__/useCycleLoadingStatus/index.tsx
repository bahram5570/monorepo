import { useEffect, useState } from 'react';

import useCountDown from '@hooks/useCountDown';

import { LoadingStatusEnum } from './loadingStatus.enum';
import { UseCycleLoadingStatusProps } from './types';

const useCycleLoadingStatus = ({ hasData }: UseCycleLoadingStatusProps) => {
  const [loadingStatus, setLoadingStatus] = useState<LoadingStatusEnum>(LoadingStatusEnum.loading);

  const { startCounter: startSuccessed } = useCountDown({
    time: 2,
    onCallBack: () => setLoadingStatus(LoadingStatusEnum.successed),
  });

  const { startCounter: startLoaded } = useCountDown({
    time: 3,
    onCallBack: () => {
      setLoadingStatus(LoadingStatusEnum.loaded);
      startSuccessed();
    },
  });

  useEffect(() => {
    if (hasData) {
      startLoaded();
    }
  }, [hasData]);

  return { loadingStatus };
};

export default useCycleLoadingStatus;
