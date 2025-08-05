import MainActivationModule from '@components/activation/MainActivationModule';
import WeightHeightModule from '@components/activation/WeightHeightModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Tracker8ContainerProps } from './types';

const Tracker8Container = ({
  payloadHandler,
  payload,
  info,
  activationData,
  isLoading,
  onRegister,
}: Tracker8ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, payload, info, activationData });

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: number) => {
    nextPageHandler({
      nextActivation: info.nextActivationList.condition1?.url || '',
      rewardId: info.nextActivationList.condition1?.rewardId,
    });
    payloadHandler({ weight: v });
  };

  return (
    <>
      <MainActivationModule isLoading={isLoading} onRegister={onRegister} {...pageInfo}>
        <WeightHeightModule type="weight" valueHandler={valueHandler} />
      </MainActivationModule>
    </>
  );
};

export default Tracker8Container;
