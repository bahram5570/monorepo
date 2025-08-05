import { useState } from 'react';

import { ResumeValuesHandlerTypes, ResumeValuesTypes } from './types';

const initialValues: ResumeValuesTypes = { email: '', file: '', jobId: 'null', name: '', phone: '' };

const useValues = () => {
  const [values, setValues] = useState<ResumeValuesTypes>(initialValues);

  const valuesHandler: ResumeValuesHandlerTypes = (name, value) => {
    setValues({ ...values, [name]: value });
  };

  return { values, valuesHandler };
};

export default useValues;
