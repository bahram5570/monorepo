import circularCycleLoadingAnimation from '@assets/lottie/circularCycleLoading.json';

import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { LottieJson } from '@lib/LottieJson';

import useLottieBubbleColor from './__hooks__/useLottieBubbleColor';
import { CircleContainerLoadingsProps } from './types';

const CircleContainerLoadings = ({ forgroundColor, loadingStatus }: CircleContainerLoadingsProps) => {
  const { bubbleRef } = useLottieBubbleColor({ forgroundColor });

  return (
    <>
      <div ref={bubbleRef}>
        <LottieJson
          animationData={circularCycleLoadingAnimation}
          className={`absolute -top-10 -left-10 -right-10 -bottom-8 pointer-events-none duration-[3000ms] -z-10
            ${loadingStatus === LoadingStatusEnum.successed ? 'scale-75' : 'scale-100'}
        `}
        />
      </div>
    </>
  );
};

export default CircleContainerLoadings;
