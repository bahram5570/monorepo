import MainActivationModule from '@components/activation/MainActivationModule';
import WeightHeightModule from '@components/activation/WeightHeightModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Prevention7ContainerProps } from './types';

const Prevention7Container = ({
  payloadHandler,
  payload,
  info,
  activationData,
  isLoading,
  onRegister,
}: Prevention7ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, payload, info, activationData });

  if (options === undefined) {
    return <></>;
  }

  const valueHandler = (v: number) => {
    nextPageHandler({
      nextActivation: info.nextActivationList.condition1?.url || '',
      rewardId: info.nextActivationList.condition1?.rewardId,
    });
    payloadHandler({ height: v });
  };

  return (
    <>
      <MainActivationModule isLoading={isLoading} onRegister={onRegister} {...pageInfo}>
        <WeightHeightModule type="height" valueHandler={valueHandler} />
      </MainActivationModule>
    </>
  );
};

export default Prevention7Container;
