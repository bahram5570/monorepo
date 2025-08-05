import { useEffect, useState } from 'react';

import { ArrangedListTypes, UeArrangeListTypes } from '../../types';

const useArrangeList = (items: UeArrangeListTypes) => {
  const [arrangedList, setArrangedList] = useState<ArrangedListTypes>([]);

  useEffect(() => {
    const result: ArrangedListTypes = [];
    const arraySize = 4;

    for (let i = 0; i < items.length; i += arraySize) {
      result.push(items.slice(i, i + arraySize));
    }

    setArrangedList(result);
  }, []);

  return { arrangedList };
};

export default useArrangeList;
