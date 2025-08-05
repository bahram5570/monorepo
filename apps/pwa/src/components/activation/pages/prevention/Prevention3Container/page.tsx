import DateModule from '@components/activation/DateModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import useDateIntervals from '@providers/__activation__/ActivationProvider/__hooks__/useDateIntervals';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Prevention3ContainerProps } from './types';

const Prevention3Container = ({
  info,
  payload,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
}: Prevention3ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });
  const { periodStart, periodEnd } = useDateIntervals();

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: string) => {
    nextPageHandler({
      nextActivation: info.nextActivationList.condition1?.url || '',
      rewardId: info.nextActivationList.condition1?.rewardId,
    });
    payloadHandler({ startPeriodDate: v });
  };

  return (
    <>
      <MainActivationModule isLoading={isLoading} onRegister={onRegister} {...pageInfo}>
        <DateModule valueHandler={valueHandler} startDate={periodStart} endDate={periodEnd} />
      </MainActivationModule>
    </>
  );
};

export default Prevention3Container;
