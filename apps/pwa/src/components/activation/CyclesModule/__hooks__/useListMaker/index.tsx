import { useEffect, useState } from 'react';

import { DataListStateTypes, ListMakerTypes, ListTypes, UseListMakerProps } from './types';

const useListMaker = (props: UseListMakerProps) => {
  const [dataList, setDataList] = useState<DataListStateTypes>(null);

  useEffect(() => {
    let list: ListTypes = [];
    let defaultValue = 0;

    if (props.name === 'periodLength') {
      list = listMaker(2, props.totalCycleLength - 1);

      if (props.totalCycleLength <= 7) {
        defaultValue = 3;
      } else {
        defaultValue = 7;
      }
    }

    if (props.name === 'totalCycleLength') {
      list = listMaker(3, 80);
      defaultValue = 28;
    }

    setDataList({ list, defaultValue });

    return () => {
      setDataList(null);
    };
  }, []);

  return { dataList };
};

export default useListMaker;

const listMaker: ListMakerTypes = (min, max) => {
  const result: ListTypes = [];

  for (let i = min; i <= max; i++) {
    result.push({ title: i.toString(), value: i });
  }

  return result;
};
