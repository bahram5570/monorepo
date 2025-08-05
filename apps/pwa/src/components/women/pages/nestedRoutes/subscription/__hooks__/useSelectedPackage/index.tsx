import { useState } from 'react';

import { SelectedPackageIndexHandlerTypes } from './types';

const useSelectedPackageIndex = () => {
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(0);

  const selectedPackageIndexHandler: SelectedPackageIndexHandlerTypes = (i) => {
    setSelectedPackageIndex(i);
  };

  return { selectedPackageIndex, selectedPackageIndexHandler };
};

export default useSelectedPackageIndex;
