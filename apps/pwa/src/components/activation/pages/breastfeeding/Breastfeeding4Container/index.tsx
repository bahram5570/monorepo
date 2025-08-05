import InputModule from '@components/activation/InputModule';
import MainActivationModule from '@components/activation/MainActivationModule';
import usePageInfo from '@providers/__activation__/ActivationProvider/__hooks__/usePageInfo';

import { Breastfeeding4ContainerProps } from './types';

const Breastfeeding4Container = ({
  payloadHandler,
  payload,
  info,
  activationData,
  isLoading,
  onRegister,
}: Breastfeeding4ContainerProps) => {
  const { nextPageHandler, pageInfo, options } = usePageInfo({ payloadHandler, info, payload, activationData });

  if (options === undefined) {
    return <></>;
  }
  const valueHandler = (v: string) => {
    nextPageHandler({
      rewardId: pageInfo.nextActivationList.condition1?.rewardId,
      nextActivation: pageInfo.nextActivationList.condition1?.url || '',
    });
    payloadHandler({ childName: v });
  };

  const childNameLength = payload.childName.trim().length;
  const invalidMessage = childNameLength < 3 && 'حداقل باید سه حرف باشه';
  const showContinueBtn = childNameLength > 0;

  return (
    <MainActivationModule
      isLoading={isLoading}
      onRegister={onRegister}
      showContinueBtn={showContinueBtn}
      invalidMessage={invalidMessage}
      {...pageInfo}
    >
      <>
        <InputModule
          valueHandler={valueHandler}
          placeHolder="اینجا بنویس"
          value={payload.childName}
          isTextTyps={true}
        />
      </>
    </MainActivationModule>
  );
};

export default Breastfeeding4Container;
