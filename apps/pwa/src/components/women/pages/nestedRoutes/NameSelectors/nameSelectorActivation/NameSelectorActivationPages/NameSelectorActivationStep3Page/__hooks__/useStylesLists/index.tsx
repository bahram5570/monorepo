import { useEffect, useState } from 'react';

import { FetchSelectNameActivationTypes } from '@services/selectNameServices/types';

import { MainListTypes, SubListTypes } from './types';

const useStylesLists = (data: FetchSelectNameActivationTypes | null) => {
  const [mainList, setMainList] = useState<MainListTypes>([]);
  const [subList, setSubList] = useState<SubListTypes>({});

  useEffect(() => {
    if (!data) {
      return;
    }

    const list = Object.entries(data.style.styles);
    let mainResult: MainListTypes = [];
    let subResult: SubListTypes = {};

    list.forEach((item) => {
      mainResult.push(item[0]);
      subResult = { ...subResult, [item[0]]: item[1] };
    });

    setMainList(mainResult);
    setSubList(subResult);
  }, []);

  return { mainList, subList };
};

export default useStylesLists;
