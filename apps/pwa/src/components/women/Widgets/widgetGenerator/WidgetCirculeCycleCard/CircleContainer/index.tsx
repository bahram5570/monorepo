import { getUserCookie } from '@utils/cookies';

import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';
import { InstallationPurposeEnum } from '@constants/activation.constants';
import { MAX_SCREEN_WIDTH } from '@constants/app.constants';

import CircleContainerContents from './CircleContainerContents';
import CircleContainerDays from './CircleContainerDays';
import CircleContainerLines from './CircleContainerLines';
import CircleContainerLoadings from './CircleContainerLoadings';
import CircleContainerWaves from './CircleContainerWaves';
import useCircleContainerSize from './__hooks__/useCircleContainerSize';
import { CircleContainerProps } from './types';

const CircleContainer = ({ data, loadingStatus }: CircleContainerProps) => {
  const { containerRef, containerSize } = useCircleContainerSize();

  if (loadingStatus === LoadingStatusEnum.successed && data === null) {
    return <></>;
  }

  const { user } = getUserCookie();
  const showNumbers =
    user !== null &&
    user.installationPurpose.status !== InstallationPurposeEnum.pregnancy.status &&
    user.installationPurpose.status !== InstallationPurposeEnum.breastfeeding.status;

  return (
    <div
      className="w-[100vw] h-[100vw] p-8 overflow-hidden"
      style={{ maxHeight: MAX_SCREEN_WIDTH, maxWidth: MAX_SCREEN_WIDTH }}
    >
      <div className="relative w-full h-full rounded-full" ref={containerRef}>
        <CircleContainerLoadings forgroundColor={data?.forgroundColor} loadingStatus={loadingStatus} />
        <CircleContainerWaves forgroundColor={data?.forgroundColor} loadingStatus={loadingStatus} />

        {data && loadingStatus === LoadingStatusEnum.successed && (
          <>
            <CircleContainerContents
              description={data.description}
              textColor={data.textColor}
              leading={data.leading}
              button={data.button}
              title={data.title}
            />

            {showNumbers && (
              <CircleContainerLines
                fertilityStart={data.fertilityStart}
                fertilityEnd={data.fertilityEnd}
                hasFertility={data.hasFertility}
                periodStart={data.periodStart}
                cycleLength={data.cycleLength}
                containerSize={containerSize}
                periodEnd={data.periodEnd}
                pmsStart={data.pmsStart}
                hasPms={data.hasPms}
                pmsEnd={data.pmsEnd}
              />
            )}

            {showNumbers && (
              <CircleContainerDays
                fertilityStart={data.fertilityStart}
                fertilityEnd={data.fertilityEnd}
                hasFertility={data.hasFertility}
                hasOvulation={data.hasOvulation}
                ovulationDay={data.ovulationDay}
                cycleLength={data.cycleLength}
                periodStart={data.periodStart}
                currentDay={data.currentDay}
                periodEnd={data.periodEnd}
                pmsStart={data.pmsStart}
                hasPms={data.hasPms}
                pmsEnd={data.pmsEnd}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CircleContainer;
