'use client';

import { createContext, useState } from 'react';

import { PayloadHandlerTypes } from '@components/activation/MainActivationModule/types';
import { ACTIVATION_PAYLOAD_VALUES } from '@constants/activation.constants';

import useActivationGoBackHandler from './__hooks__/useActivationGoBackHandler';
import useActivationSectionRouteProtection from './__hooks__/useActivationSectionRouteProtection';
import useData from './__hooks__/useData';
import { ActivationProviderProps, ActivationTypes } from './types';

export const ActivationContext = createContext<ActivationTypes>({
  data: null,
  payloadHandler: () => {},
  payload: ACTIVATION_PAYLOAD_VALUES,
});

const ActivationProvider = ({ children, questionsData, errorCode }: ActivationProviderProps) => {
  if (typeof window === 'undefined') {
    return <></>;
  }

  const { data } = useData({ errorCode, questionsData });
  const [payload, setPayload] = useState(ACTIVATION_PAYLOAD_VALUES);

  const payloadHandler: PayloadHandlerTypes = (v) => {
    setPayload({ ...payload, ...v });
  };

  useActivationSectionRouteProtection({ payloadHandler });
  useActivationGoBackHandler();

  return (
    <ActivationContext.Provider value={{ payload, payloadHandler, data }}>
      <>{children}</>
    </ActivationContext.Provider>
  );
};

export default ActivationProvider;
