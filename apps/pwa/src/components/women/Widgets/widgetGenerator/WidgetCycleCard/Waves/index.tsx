import { useRef } from 'react';

import { colorFormatConverter } from '@utils/scripts';

import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import useTheme from '@hooks/useTheme';

import useLottieColor from '../__hooks__/useLottieColor';
import { TOTAL_WAVE_CONTAINER_SIZE } from '../constants';
import LoadingMessages from './LoadingMessages';
import WaveContainer from './WaveContainer';
import useWaveRendered from './__hooks__/useWaveRendered';
import { WavesProps } from './types';

const Waves = ({ backgroundColour, forgroundColor, loadingStatus }: WavesProps) => {
  const { colors } = useTheme();
  const DEFAULT_COLOR = colors.Pink_500;

  const ref = useRef<HTMLDivElement>(null);
  const { waveRendered, waveRenderedHandler } = useWaveRendered();
  useLottieColor({ ref, color: forgroundColor ? colorFormatConverter(forgroundColor) : DEFAULT_COLOR });

  const backgroundColor =
    backgroundColour && loadingStatus === LoadingStatusEnum.loaded
      ? colorFormatConverter(backgroundColour)
      : 'transparent';

  return (
    <>
      {waveRendered && <LoadingMessages loadingStatus={loadingStatus} />}

      <div className="absolute left-0 right-0 bottom-0 w-full h-full flex justify-center overflow-hidden pointer-events-none -z-10">
        <div
          ref={ref}
          className="absolute bottom-0 rounded-full flex justify-center items-end overflow-hidden"
          style={{
            backgroundColor,
            width: TOTAL_WAVE_CONTAINER_SIZE,
            height: TOTAL_WAVE_CONTAINER_SIZE,
            minWidth: TOTAL_WAVE_CONTAINER_SIZE,
            minHeight: TOTAL_WAVE_CONTAINER_SIZE,
          }}
        >
          <WaveContainer loadingStatus={loadingStatus} waveRenderedHandler={waveRenderedHandler} />
        </div>
      </div>
    </>
  );
};

export default Waves;
