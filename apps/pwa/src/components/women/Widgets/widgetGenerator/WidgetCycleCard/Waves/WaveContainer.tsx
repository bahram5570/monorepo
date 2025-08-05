import { memo } from 'react';

import wavesJson from '@assets/lottie/cycleWaves.json';

import styles from './WaveContainer.module.css';

import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';
import { LottieJson } from '@lib/LottieJson';

import { WaveContainerProps } from './types';

const WaveContainer = ({ loadingStatus, waveRenderedHandler }: WaveContainerProps) => {
  return (
    <>
      <div
        style={{
          maxWidth: MAX_SCREEN_WIDTH,
        }}
        className={`
          ${styles.wave} 
          ${(loadingStatus === LoadingStatusEnum.loading || loadingStatus === LoadingStatusEnum.loaded) && styles.loading} 
          ${loadingStatus === LoadingStatusEnum.successed && styles.successed}
        `}
      >
        <LottieJson
          animationData={wavesJson}
          style={{ maxWidth: MAX_SCREEN_WIDTH }}
          onDOMLoaded={() => waveRenderedHandler(true)}
          className="pointer-events-none w-full"
        />
      </div>
    </>
  );
};

export default memo(WaveContainer, (prev, next) => {
  return prev.loadingStatus === next.loadingStatus;
});
