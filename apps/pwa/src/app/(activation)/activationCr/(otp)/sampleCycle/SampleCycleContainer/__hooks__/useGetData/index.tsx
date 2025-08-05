import { useEffect, useState } from 'react';

import { textColorFinder } from './__utils__';

import { CycleResponseTypes } from '@components/women/pages/mainRoutes/cycle/types';
import { SAMPLE_CYCLE_STORAGE_NAME } from '@providers/__activation__/ActivationCrProvider/__constants__/activationCrContants';

const useGetData = () => {
  const [data, setData] = useState<undefined | CycleResponseTypes>(undefined);

  useEffect(() => {
    const storedData = sessionStorage.getItem(SAMPLE_CYCLE_STORAGE_NAME);

    if (storedData !== null) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const textColor = textColorFinder(data);

  return { data, textColor };
};

export default useGetData;
