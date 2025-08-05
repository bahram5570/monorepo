import { ProgressCycleEnums } from './enums';

export interface ProgressCycleLoadingProps {
  image: string;
  isSuccess: boolean;
  circleColor?: string;
  onComplete: () => void;
  backgroundColor?: string;
  titles: { subTitle1: string; subTitle2: string; main: string };
}

export interface CircleProgressBarProps extends Pick<ProgressCycleLoadingProps, 'onComplete' | 'circleColor'> {
  loadingStatus: ProgressCycleEnums;
}
