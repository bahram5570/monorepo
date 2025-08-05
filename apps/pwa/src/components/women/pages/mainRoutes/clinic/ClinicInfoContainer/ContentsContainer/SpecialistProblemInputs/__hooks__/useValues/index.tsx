import { useEffect, useState } from 'react';

import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { ValuesHandlerTypes } from './types';

const useValues = () => {
  const [values, setValues] = useState({ text: '', fileName: '' });
  const { getQueryParams } = useQueryParamsHandler();

  useEffect(() => {
    const fileName = getQueryParams('fileName');
    const text = getQueryParams('text');

    if (fileName !== null && text !== null) {
      setValues({ fileName, text });
    }
  }, []);

  const valuesHandler: ValuesHandlerTypes = (v) => {
    setValues({ ...values, [v.name]: v.value });
  };

  return { values, valuesHandler };
};

export default useValues;
