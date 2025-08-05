import circularCycleLoadingTick from '@assets/lottie/circularCycleLoadingTick.json';
import wavesJson from '@assets/lottie/cycleWaves.json';
import { colorFormatConverter } from '@utils/scripts';

import Typography from '@components/ui/Typography';
import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import useTheme from '@hooks/useTheme';
import { LottieJson } from '@lib/LottieJson';

import useLottieWavesColor from './__hooks__/useLottieWavesColor';
import { CircleContainerWavesProps } from './types';

const CircleContainerWaves = ({ forgroundColor, loadingStatus }: CircleContainerWavesProps) => {
  const { colors } = useTheme();
  const { wavesRef } = useLottieWavesColor({ forgroundColor });

  const waveBackground = colorFormatConverter(forgroundColor || colors.Cyan_50) + '0A';
  const wavePaddingTop = loadingStatus === LoadingStatusEnum.successed ? '55%' : '100%';

  return (
    <>
      <div
        ref={wavesRef}
        style={{ background: colors.White }}
        className="absolute top-1 left-1 right-1 bottom-1 rounded-full overflow-hidden pointer-events-none"
      >
        <div
          className="w-full h-full duration-500"
          style={{ backgroundColor: waveBackground, paddingTop: wavePaddingTop }}
        >
          <LottieJson animationData={wavesJson} />
        </div>
      </div>

      <div className="animate-cycleUpdatingScript absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center pointer-events-none">
        <Typography
          scale="Title"
          size="Medium"
          className={`duration-300 ${loadingStatus === LoadingStatusEnum.loading ? 'scale-100' : 'scale-0'}`}
        >
          چرخه در حال بروزرسانی
        </Typography>
      </div>

      <div
        className={`duration-300 ${loadingStatus === LoadingStatusEnum.loaded ? 'scale-100' : 'scale-0'} 
          absolute left-0 right-0 top-0 bottom-0 flex flex-col justify-center items-center pointer-events-none
        `}
      >
        <LottieJson animationData={circularCycleLoadingTick} loop={false} className="w-12 h-auto" />

        <Typography scale="Title" size="Medium">
          چرخه بروزرسانی شد
        </Typography>
      </div>
    </>
  );
};

export default CircleContainerWaves;
