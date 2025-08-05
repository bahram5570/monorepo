import { useState } from 'react';

import { currentDate } from '@utils/dates';

import useApi from '@hooks/useApi';

import { useSignSelectedProps } from './types';

const { gDate } = currentDate();

const useSignSelected = ({ initialIsSelected, category, sign, onSelect, selectedDate }: useSignSelectedProps) => {
  const [isSelected, setIsSelected] = useState(initialIsSelected);

  const actionType = isSelected ? 'add' : 'remove';
  const { callApi } = useApi({ method: 'POST', api: `info/woman/sign/${actionType}` });

  const isSelectedHandler = () => {
    if (onSelect) {
      onSelect();
    }

    setIsSelected(!isSelected);

    const payload = { date: selectedDate || gDate, items: [{ category, sign }] };
    callApi(payload);
  };

  return { isSelected, isSelectedHandler };
};

export default useSignSelected;
