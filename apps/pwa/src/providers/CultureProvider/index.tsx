'use client';

import { createContext, useEffect, useState } from 'react';

import { setCultureCookie } from '@app/actions/cookie.actions';

import { CULTURE_INITIAL_VALUES } from './constants';
import { CultureConextTypes, CultureHandlerTypes, CultureProviderTypes, CultureTypes } from './types';

export const CultureConext = createContext<CultureConextTypes>({
  cultureHandler: () => {},
  culture: CULTURE_INITIAL_VALUES,
});

const CultureProvider = ({ children, defaultValues }: CultureProviderTypes) => {
  const [culture, setCulture] = useState<CultureTypes>(defaultValues || CULTURE_INITIAL_VALUES);

  const cultureHandler: CultureHandlerTypes = async (name, value) => {
    const result = { ...culture, [name]: value };

    setCulture(result);
    await setCultureCookie(result);
  };

  useEffect(() => {
    const handleDefaultValues = async () => {
      if (defaultValues === null) {
        await setCultureCookie(CULTURE_INITIAL_VALUES);
      }
    };

    handleDefaultValues();
  }, []);

  return (
    <CultureConext.Provider value={{ culture, cultureHandler }}>
      <>{children}</>
    </CultureConext.Provider>
  );
};

export default CultureProvider;
