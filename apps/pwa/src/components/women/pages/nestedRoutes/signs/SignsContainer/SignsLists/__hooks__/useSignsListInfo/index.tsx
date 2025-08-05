import { useEffect, useState } from 'react';

import { SelectedSignsHandlerTypes } from '../../CategoryGenerator/types';
import { UseSignsListInfoProps } from './types';

const useSignsListInfo = ({ infoData, slideIndex, slide }: UseSignsListInfoProps) => {
  const [info, setInfo] = useState(infoData);

  useEffect(() => {
    // # An exception! In signs after refetching the react-query, the 'info' state manually will be updated
    if (info && infoData.kitTests) {
      setInfo({ ...info, kitTests: infoData.kitTests });
    }
  }, [infoData.kitTests]);

  const selectHandler: SelectedSignsHandlerTypes = (ca, si) => {
    const initialSelectedSigns = [...info.initialSelectedSigns];
    const selectedIndex = initialSelectedSigns.findIndex((item) => item.category === ca && item.sign === si);

    if (selectedIndex === -1) {
      initialSelectedSigns.push({ category: ca, sign: si });
    } else {
      initialSelectedSigns.splice(selectedIndex, 1);
    }

    const result = { ...info, initialSelectedSigns };
    setInfo(result);
  };

  const isVisibleSlideIndex = [slideIndex - 1, slideIndex, slideIndex + 1].includes(slide);

  return { isVisibleSlideIndex, info, selectHandler };
};

export default useSignsListInfo;
