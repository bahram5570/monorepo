import { WidgetCirculeCycleCardProps } from '../../types';

type LoadingTypes = Pick<WidgetCirculeCycleCardProps, 'loadingStatus'>;
export interface CircleContainerLoadingsProps extends LoadingTypes {
  forgroundColor: string | undefined;
}
