import { useState } from 'react';

import { InitialSelectedSignsTypes } from '@components/women/pages/nestedRoutes/signs/__hooks__/useGetData/types';
import useCurrentDateInSigns from '@hooks/useCurrentDateInSigns';

import { SelectedSignsHandlerTypes } from '../../types';

const useSelectedSigns = (initialSelectedSigns: InitialSelectedSignsTypes) => {
  const [selectedSigns, setSelectedSigns] = useState(initialSelectedSigns);
  const { changeSignsStaus } = useCurrentDateInSigns();

  const selectedSignsHandler: SelectedSignsHandlerTypes = (category, sign) => {
    const selectedIndex = selectedSigns.findIndex((item) => item.category === category && item.sign === sign);

    if (selectedIndex === -1) {
      const result = [...selectedSigns, { category, sign }];
      setSelectedSigns(result);
    } else {
      const result = selectedSigns.filter((_, itemIndex) => itemIndex !== selectedIndex);
      setSelectedSigns(result);
    }
    changeSignsStaus();
  };

  return { selectedSigns, selectedSignsHandler };
};

export default useSelectedSigns;
