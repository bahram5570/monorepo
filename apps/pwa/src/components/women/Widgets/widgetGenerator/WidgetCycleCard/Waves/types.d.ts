import { LoadingStatusEnum } from '@components/women/pages/mainRoutes/cycle/CycleContainer/__hooks__/useCycleLoadingStatus/loadingStatus.enum';

export interface WavesProps {
  loadingStatus: LoadingStatusEnum;
  backgroundColour?: string;
  forgroundColor?: string;
}

export interface WaveContainerProps {
  waveRenderedHandler: (b: boolean) => void;
  loadingStatus: LoadingStatusEnum;
}

export interface LoadingMessagesProps {
  loadingStatus: LoadingStatusEnum;
}
