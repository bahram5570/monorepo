import DateModule from '@components/activation/DateModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Tracker5ContainerProps } from './types';

const Tracker5Container = ({
  payload,
  info,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
}: Tracker5ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });
  const { periodStart, periodEnd } = useDateIntervals();

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: string) => {
    payloadHandler({ startPeriodDate: v });

    nextPageHandler({
      nextActivation: info.nextActivationList.condition1?.url || '',
      rewardId: info.nextActivationList.condition1?.rewardId,
    });
  };

  return (
    <>
      <MainActivationModule isLoading={isLoading} onRegister={onRegister} {...pageInfo}>
        <DateModule valueHandler={valueHandler} startDate={periodStart} endDate={periodEnd} />
      </MainActivationModule>
    </>
  );
};

export default Tracker5Container;
