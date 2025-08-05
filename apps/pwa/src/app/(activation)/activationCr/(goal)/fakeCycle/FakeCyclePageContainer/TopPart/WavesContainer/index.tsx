import Waves from '@components/women/Widgets/widgetGenerator/WidgetCycleCard/Waves';
import { TOTAL_WAVE_CONTAINER_SIZE } from '@components/women/Widgets/widgetGenerator/WidgetCycleCard/constants';

import { WavesContainerProps } from './types';

const WavesContainer = ({ topPartBackgroundColor }: WavesContainerProps) => {
  return (
    <>
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 mx-auto rounded-full z-0"
        style={{
          width: TOTAL_WAVE_CONTAINER_SIZE,
          height: TOTAL_WAVE_CONTAINER_SIZE,
          minWidth: TOTAL_WAVE_CONTAINER_SIZE,
          minHeight: TOTAL_WAVE_CONTAINER_SIZE,
          backgroundColor: `${topPartBackgroundColor}22`,
        }}
      />

      <Waves backgroundColour={''} forgroundColor={topPartBackgroundColor} loadingStatus={2} />
    </>
  );
};

export default WavesContainer;
