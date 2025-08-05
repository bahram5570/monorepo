import { useState } from 'react';

import { CycleResponseTypes } from '@components/women/pages/mainRoutes/cycle/types';
import useApi from '@hooks/useApi';
import { WidgetsEnum } from '@providers/WidgetActionsProvider/widgetEnums';

import { UseNewBabyCheckDataPropsData } from './type';

const useNewBabyCheckData = ({ data }: UseNewBabyCheckDataPropsData) => {
  const [queryCount, setQueryCount] = useState(0);
  const [updatedData, setUpdatedData] = useState(data);

  const successHandler = (v: CycleResponseTypes) => {
    setQueryCount((state) => state + 1);

    if (!v?.wigets) return;
    const newOvulationWidget = v.wigets.find((widget) => widget.type === WidgetsEnum.BabyCheckKitCard);

    if (!newOvulationWidget) return;

    setUpdatedData(newOvulationWidget.data);
  };

  const { callApi: getNewWidgetData } = useApi<CycleResponseTypes>({
    api: 'wigets',
    method: 'GET',
    fetchOnMount: false,
    onSuccess: successHandler,
    queryKey: [`wigets_fetch_${queryCount}`],
  });

  const onAdd = () => {
    getNewWidgetData();
  };

  const onDelete = (index: number) => {
    const result = { ...updatedData };
    result.items = result.items.filter((_, i) => i !== index);
    setUpdatedData(result);
  };

  return { onAdd, onDelete, updatedData };
};

export default useNewBabyCheckData;
