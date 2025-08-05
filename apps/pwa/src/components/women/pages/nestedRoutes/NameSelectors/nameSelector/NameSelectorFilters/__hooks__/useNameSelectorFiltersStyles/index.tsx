import { useEffect, useState } from 'react';

import useNameSelectorData from '../../../__hooks__/useNameSelectorData';

const useNameSelectorFiltersStyles = (isOpen: boolean) => {
  const { allFilters, data } = useNameSelectorData();
  const [stylesValue, setStylesValue] = useState(allFilters.styles);

  const stylesValueHandler = (v: string) => {
    const copyFilters = [...stylesValue];
    const itemIndex = copyFilters.findIndex((item) => item === v);

    if (itemIndex > -1) {
      copyFilters.splice(itemIndex, 1);
    } else {
      copyFilters.push(v);
    }

    setStylesValue(copyFilters);
  };

  useEffect(() => {
    if (isOpen) {
      setStylesValue(allFilters.styles);
    }
  }, [isOpen]);

  const isStylesDisable = stylesValue.length === 0;
  const stylesList = data?.filters;

  return { stylesValue, stylesValueHandler, isStylesDisable, stylesList };
};

export default useNameSelectorFiltersStyles;
