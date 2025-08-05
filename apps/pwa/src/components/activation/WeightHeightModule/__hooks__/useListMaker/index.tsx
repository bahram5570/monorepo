import { useEffect, useState } from 'react';

import { ACTIVATION_HEIGHT_VALUES, ACTIVATION_WEIGHT_VALUES } from '../../constants';
import { DataListTypes, UseListMakerProps } from './types';

const useListMaker = ({ type }: UseListMakerProps) => {
  const [dataList, setDataList] = useState<DataListTypes>(null);

  useEffect(() => {
    const currentValues = type === 'weight' ? ACTIVATION_WEIGHT_VALUES : ACTIVATION_HEIGHT_VALUES;
    const list = [];

    for (let i = currentValues.min; i < currentValues.max; i++) {
      list.push({ title: `${i} ${currentValues.unit}`, value: i });
    }

    setDataList({ list, defaultValue: currentValues.defaultValue });
  }, [type]);

  return { dataList };
};

export default useListMaker;
