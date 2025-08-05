import { useEffect, useState } from 'react';

import { WidgetsEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import {
  CirculeCycleCardDataTypes,
  CycleCardDataTypes,
  CycleWidgetListsTypes,
  UseWidgetsListMakerProps,
} from './types';
import useCycleThemeFinder from './useCycleThemeFinder';

const useWidgetsListMaker = ({ widgets }: UseWidgetsListMakerProps) => {
  const { currentCycle, currentCycleThemeEnum } = useCycleThemeFinder();

  const [outsideCycleWidgetList, setOutsideCycleWidgetList] = useState<CycleWidgetListsTypes>(null);
  const [insideCycleWidgetList, setInsideCycleWidgetList] = useState<CycleWidgetListsTypes>(null);

  const [cycleCardData, setCycleCardData] = useState<CycleCardDataTypes>(null);
  const [circuleCycleCardData, setCirculeCycleCardData] = useState<CirculeCycleCardDataTypes>(null);

  useEffect(() => {
    if (widgets) {
      const cycleIndex = widgets.findIndex((item) => item.type === currentCycle);

      if (cycleIndex > -1) {
        setOutsideCycleWidgetList(widgets.slice(cycleIndex + 1, widgets.length));
        setInsideCycleWidgetList(widgets.slice(0, cycleIndex));

        if (currentCycle === WidgetsEnum.CirculeCycleCard) {
          const cycleData = widgets[cycleIndex].type === currentCycle ? widgets[cycleIndex].data : null;
          setCirculeCycleCardData(cycleData);
        } else {
          const cycleData = widgets[cycleIndex].type === currentCycle ? widgets[cycleIndex].data : null;
          setCycleCardData(cycleData);
        }
      } else {
        setCycleCardData(null);
        setCirculeCycleCardData(null);
        setOutsideCycleWidgetList(widgets);
      }
    }
  }, [widgets, currentCycle]);

  return { currentCycleThemeEnum, insideCycleWidgetList, outsideCycleWidgetList, cycleCardData, circuleCycleCardData };
};

export default useWidgetsListMaker;
