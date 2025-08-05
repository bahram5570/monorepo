import { LottieJson } from '@lib/LottieJson';

import wavesJson from '@assets/lottie/cycleWaves.json';
import CustomTypography from '@components/ui/CustomTypography';

import useWavesColor from './__hooks__/useWavesColor';
import { WavesContainerTypes } from './types';

const WavesContainer = ({ backgroundColor, waveColor, children, height, title }: WavesContainerTypes) => {
  const { ref } = useWavesColor(waveColor);

  return (
    <div
      className="relative w-full flex flex-col items-center rounded-2xl overflow-hidden"
      style={{ backgroundColor, height }}
    >
      <div className="relative w-full h-full flex flex-col items-center gap-3 px-4 pt-6 pb-5 z-10">
        <CustomTypography fontSize="Headline_Medium">{title}</CustomTypography>

        <>{children}</>
      </div>

      <div ref={ref} className="absolute left-0 right-0 bottom-0 w-full h-[130px] sm:h-[170px] pointer-events-none z-0">
        <LottieJson animationData={wavesJson} className="w-full" />
      </div>
    </div>
  );
};

export default WavesContainer;
