import { useEffect, useState } from 'react';

import useCustomReactQuery from '@hooks/useCustomReactQuery';

import { BabyCheckTypeEnums } from '../../enum';
import { SelectedBabyCheckHandlerTypes } from './types';

const useSelectedBabyCheck = () => {
  const { getQuery, removeQuery } = useCustomReactQuery();
  const [selectedBabyCheck, setSelectedBacyCheck] = useState<BabyCheckTypeEnums | null>(null);

  const selectedBabyCheckHandler: SelectedBabyCheckHandlerTypes = (v) => {
    setSelectedBacyCheck(v);
  };

  const hasResetOrder = getQuery({ queryKey: ['resetBabyCheck'] });

  useEffect(() => {
    if (hasResetOrder) {
      setSelectedBacyCheck(null);
      removeQuery({ queryKey: ['resetBabyCheck'] });
    }
  }, [hasResetOrder]);

  return { selectedBabyCheck, selectedBabyCheckHandler };
};

export default useSelectedBabyCheck;
