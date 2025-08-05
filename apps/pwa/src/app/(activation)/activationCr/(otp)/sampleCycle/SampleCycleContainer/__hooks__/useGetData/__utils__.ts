import { colorFormatConverter } from '@utils/scripts';

import { CycleResponseTypes } from '@components/women/pages/mainRoutes/cycle/types';
import { WidgetsEnum } from '@providers/WidgetActionsProvider/widgetEnums';

export const textColorFinder = (data: undefined | CycleResponseTypes) => {
  let textColor = '#000000';

  if (data) {
    const cycleWidget = data.wigets.find((item) => item.type === WidgetsEnum.CycleCard);

    if (cycleWidget) {
      textColor = colorFormatConverter(cycleWidget.data.textColor);
    }
  }

  return textColor;
};
