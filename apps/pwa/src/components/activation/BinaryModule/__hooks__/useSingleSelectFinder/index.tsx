import { useEffect, useState } from 'react';

import { UseSingleSelectFinderProps } from './types';

const useSingleSelectFinder = ({ binaryOptions }: UseSingleSelectFinderProps) => {
  const [isSingleSelectIndexList, setIsSingleSelectIndexList] = useState<number[]>([]);

  useEffect(() => {
    const list: number[] = [];

    binaryOptions.forEach((item) => {
      if (item.isSingleSelect) {
        list.push(Math.pow(2, item.index));
      }
    });

    setIsSingleSelectIndexList(list);
  }, []);

  return { isSingleSelectIndexList };
};

export default useSingleSelectFinder;
