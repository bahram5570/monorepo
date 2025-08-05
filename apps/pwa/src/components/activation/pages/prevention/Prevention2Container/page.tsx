import BinaryModule from '@components/activation/BinaryModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Prevention2ContainerProps } from './types';

const Prevention2Container = ({
  info,
  payload,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
}: Prevention2ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  if (options === undefined) {
    return <></>;
  }

  const binaryOptions = [
    { ...options[0], index: 0 },
    { ...options[1], index: 1 },
    { ...options[2], index: 2 },
    { ...options[3], index: 3 },
    { ...options[4], index: 4 },
    { ...options[5], index: 5 },
  ];

  const valueHandler = (id: number) => {
    let result = { preventionWays: id };

    nextPageHandler({
      rewardId: info.nextActivationList.condition1?.rewardId,
      nextActivation: info.nextActivationList.condition1?.url || '',
    });
    payloadHandler(result);
  };

  const showContinueBtn = payload.preventionWays > -1;

  return (
    <>
      <MainActivationModule
        isLoading={isLoading}
        onRegister={onRegister}
        showContinueBtn={showContinueBtn}
        {...pageInfo}
      >
        <BinaryModule binaryOptions={binaryOptions} valueHandler={valueHandler} />
      </MainActivationModule>
    </>
  );
};

export default Prevention2Container;
