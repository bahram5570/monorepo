import { useEffect, useState } from 'react';

import { SelectNameGenderEnum } from '@services/selectNameServices/enums';

import useNameSelectorData from '../../../__hooks__/useNameSelectorData';

const useNameSelectorFiltersGender = (isOpen: boolean) => {
  const { allFilters, data } = useNameSelectorData();
  const [genderValue, setGenderValue] = useState(allFilters.gender);

  const genderValuetHandler = (v: SelectNameGenderEnum) => {
    setGenderValue(v);
  };

  useEffect(() => {
    if (isOpen) {
      setGenderValue(allFilters.gender);
    }
  }, [isOpen]);

  const isGenderDisable = genderValue === SelectNameGenderEnum.None;
  const genderList = data?.genderFilters;

  return { genderValue, genderValuetHandler, isGenderDisable, genderList };
};

export default useNameSelectorFiltersGender;
