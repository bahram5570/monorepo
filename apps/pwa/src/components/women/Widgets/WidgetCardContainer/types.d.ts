import { WidgetsButtonTypes } from '@providers/WidgetActionsProvider/widgetCommon';

export interface WidgetCardContainerProps {
  button?: WidgetsButtonTypes;
  titleElement?: JSX.Element;
  children: React.ReactNode;
  title: string;
}
