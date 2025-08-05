import BinaryModule from '@components/activation/BinaryModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Intention5ContainerProps } from './types';

const Intention5Container = ({
  info,
  payload,
  payloadHandler,
  activationData,
  isLoading,
  onRegister,
}: Intention5ContainerProps) => {
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
    { ...options[5], index: 5, isSingleSelect: true },
    { ...options[6], index: 6, isSingleSelect: true },
  ];

  const valueHandler = (v: number) => {
    let result = { sickness: v };

    // switch (v) {
    //   case 64:
    //     nextPageHandler({
    //       rewardId: info.nextActivationList.condition1?.rewardId,
    //       nextActivation: info.nextActivationList.condition1?.url || '',
    //     });
    //     break;

    //   default:
    //     nextPageHandler({
    //       rewardId: info.nextActivationList.condition2?.rewardId,
    //       nextActivation: info.nextActivationList.condition2?.url || '',
    //     });
    //     break;
    // }

    nextPageHandler({
      rewardId: info.nextActivationList.condition1?.rewardId,
      nextActivation: info.nextActivationList.condition1?.url || '',
    });

    payloadHandler(result);
  };

  const showContinueBtn = payload.sickness > -1;

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

export default Intention5Container;
