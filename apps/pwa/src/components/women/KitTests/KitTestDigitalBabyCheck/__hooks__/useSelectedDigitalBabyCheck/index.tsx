import { useState } from 'react';

import { SelectedDigitalBabyCheckHandlerTypes, SelectedDigitalBabyCheckTypes } from './types';

const useSelectedDigitalBabyCheck = () => {
  const [selectedDigitalBabyCheck, setSelectedDigitalBabyCheck] = useState<SelectedDigitalBabyCheckTypes>(null);

  const selectedDigitalBabyCheckHandler: SelectedDigitalBabyCheckHandlerTypes = (v) => {
    setSelectedDigitalBabyCheck(v);
  };

  return { selectedDigitalBabyCheck, selectedDigitalBabyCheckHandler };
};

export default useSelectedDigitalBabyCheck;
