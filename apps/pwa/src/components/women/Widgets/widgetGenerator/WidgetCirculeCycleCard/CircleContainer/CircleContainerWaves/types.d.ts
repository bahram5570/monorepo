import { WidgetCirculeCycleCardProps } from '../../types';

type LoadingTypes = Pick<WidgetCirculeCycleCardProps, 'loadingStatus'>;
export interface CircleContainerWavesProps extends LoadingTypes {
  forgroundColor: string | undefined;
}
